import { distributeExams } from '@/lib/answer-distribution';
import { exams as baseExams8, type Exam } from '@/lib/exams';
import { exams10 } from '@/lib/exams10';
import { additionalExams8 } from '@/lib/exams8-content';
import { exams9 } from '@/lib/exams9';
import { extendedExams, type ExtendedGrade } from '@/lib/extended-grades';
import { semester2Exams, upgradeEnglish10MidtermSix } from '@/lib/semester2-exams';
import { enrichUnitExam } from '@/lib/unit-enrichment';
import { newBookUnitExams } from '@/lib/unit-new-books';

export type CoreGrade = 8 | 9 | 10;
export type GradeLevel = ExtendedGrade | CoreGrade;
export type MenuGroup = NonNullable<Exam['menuGroup']>;
export type QuestionBankSort = 'curriculum' | 'title' | 'questions-desc' | 'questions-asc';

export const QUESTION_BANK_GROUPS: [MenuGroup, string][] = [
  ['unit', 'Học theo Unit'],
  ['review', 'Ôn tập'],
  ['survey', 'Khảo sát đầu năm'],
  ['midterm', 'Đề giữa kỳ I'],
  ['final', 'Đề cuối kỳ I'],
  ['midterm2', 'Đề giữa kỳ II'],
  ['final2', 'Đề cuối kỳ II'],
];

export function unitNumber(exam: Exam, grade: GradeLevel) {
  if (exam.unit) return exam.unit;
  if (exam.menuGroup !== 'unit') return undefined;
  return grade === 8 ? exam.id - 6 : grade === 9 ? exam.id - 100 : exam.id;
}

function prepareExams(items: Exam[], grade: CoreGrade) {
  const enriched = items.map((exam) => enrichUnitExam(exam, grade));
  const newByUnit = new Map(newBookUnitExams[grade].map((exam) => [exam.unit, exam]));
  const inserted = new Set<number>();
  const prepared: Exam[] = [];

  for (const exam of enriched) {
    const unit = unitNumber(exam, grade);
    const newBook = unit ? newByUnit.get(unit) : undefined;
    if (!unit || !newBook) {
      prepared.push(exam);
      continue;
    }
    const baseLabel = (exam.menuLabel ?? `Unit ${unit}`).replace(/ · Bộ cũ$/, '');
    prepared.push({ ...exam, unit, bookLabel: 'Bộ cũ', menuLabel: `${baseLabel} · Bộ cũ` }, newBook);
    inserted.add(unit);
  }

  for (const exam of newBookUnitExams[grade]) {
    if (exam.unit && !inserted.has(exam.unit)) prepared.push(exam);
  }
  return prepared;
}

const exams8 = distributeExams(prepareExams([...baseExams8, ...additionalExams8, ...semester2Exams[8]], 8));
const balancedExams9 = distributeExams(prepareExams([...exams9, ...semester2Exams[9]], 9));
const balancedExams10 = distributeExams(prepareExams(upgradeEnglish10MidtermSix([...exams10, ...semester2Exams[10]]), 10));

export const examsByGrade: Record<GradeLevel, Exam[]> = {
  6: extendedExams[6],
  7: extendedExams[7],
  8: exams8,
  9: balancedExams9,
  10: balancedExams10,
  11: extendedExams[11],
  12: extendedExams[12],
};

function searchableText(exam: Exam, grade: GradeLevel) {
  const questions = exam.questions.flatMap((question) => [question.prompt, question.template ?? '', question.skillArea ?? '', question.section, question.explanation, ...question.options]);
  return [
    `English ${grade}`,
    exam.menuLabel ?? '',
    exam.title,
    exam.theme,
    exam.bookLabel ?? '',
    exam.unit ? `Unit ${exam.unit}` : '',
    ...questions,
  ].join(' ').toLocaleLowerCase('vi');
}

export function filterQuestionBank(
  exams: Exam[],
  grade: GradeLevel,
  query: string,
  group: MenuGroup | 'all',
  sort: QuestionBankSort,
) {
  const normalizedQuery = query.trim().toLocaleLowerCase('vi');
  const filtered = exams
    .map((exam, index) => ({ exam, index }))
    .filter(({ exam }) => group === 'all' || exam.menuGroup === group)
    .filter(({ exam }) => !normalizedQuery || searchableText(exam, grade).includes(normalizedQuery));

  if (sort === 'title') return filtered.sort((a, b) => (a.exam.menuLabel ?? a.exam.title).localeCompare(b.exam.menuLabel ?? b.exam.title, 'vi'));
  if (sort === 'questions-desc') return filtered.sort((a, b) => b.exam.questions.length - a.exam.questions.length);
  if (sort === 'questions-asc') return filtered.sort((a, b) => a.exam.questions.length - b.exam.questions.length);
  return filtered;
}

