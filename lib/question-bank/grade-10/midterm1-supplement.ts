import type { Exam, Question } from '@/lib/exams';

const mcq = (id: number, prompt: string, options: string[], answer: number, explanation: string): Question => ({
  id,
  section: 'Language Focus',
  skillArea: 'Grammar',
  prompt,
  options,
  answer,
  explanation,
});

const rewrite = (
  id: number,
  source: string,
  givenWord: string,
  template: string,
  answers: string | string[],
  explanation: string,
): Question => ({
  id,
  section: 'Writing',
  skillArea: 'Writing',
  kind: 'typed',
  prompt: 'Complete the second sentence using the word in capitals. Do not change the given word.',
  template: `${source}\n(${givenWord}) → ${template}`,
  options: [],
  answer: answers,
  givenWord,
  explanation,
  hint: `Keep “${givenWord}” unchanged and check the grammar on both sides of the blank.`,
});

const questions: Question[] = [
  mcq(1, 'Our school library ___ quiet during the lunch break.', ['usually is', 'is usually', 'usual is', 'was usually every day'], 1, 'Adverbs of frequency normally follow the verb “be”: is usually.'),
  mcq(2, 'My cousin ___ the kitchen after dinner.', ['cleans often', 'often cleans', 'is often clean', 'often cleaning'], 1, 'With an ordinary verb, the adverb of frequency normally comes before the verb: often cleans.'),
  mcq(3, 'The student denied ___ another person’s work.', ['copy', 'to copy', 'copying', 'copied'], 2, '“Deny” is followed by a gerund: deny doing something.'),
  mcq(4, 'This explanation is ___ than the one in the old handout.', ['clearer', 'more clear than', 'clearest', 'clearly'], 0, 'The short adjective “clear” forms the comparative with -er: clearer.'),
  mcq(5, 'After practising every day, Hoa became ___ at presenting her ideas.', ['confidenter', 'more confident', 'most confidently', 'more confidently than'], 1, 'A long adjective uses more in the comparative: more confident.'),
  mcq(6, 'The second task was difficult, but we completed it ___ than the first.', ['successfuller', 'more successfully', 'most successful', 'more successful'], 1, 'The verb “completed” needs a comparative adverb: more successfully.'),
  {
    id: 7,
    section: 'Reading',
    skillArea: 'Reading',
    kind: 'cloze-dropdown',
    prompt: 'Read the passage and choose the best option for each numbered blank.',
    template: 'The Tran family holds a short meeting every Sunday evening. Each member [[0]] one household duty for the following week. They also discuss any problem [[1]] needs a shared decision. At first, it was difficult to find a suitable time, [[2]] everyone adjusted their schedule. The meetings have made responsibilities [[3]] and helped the family become more [[4]].',
    options: [],
    answer: ['chooses', 'that', 'so', 'clearer', 'cooperative'],
    gapOptions: [
      ['chooses', 'choose', 'is choosing always', 'chosen'],
      ['that', 'who', 'where', 'whose'],
      ['so', 'because', 'although', 'or'],
      ['clearer', 'clearest', 'clearly', 'more clear than before than'],
      ['cooperative', 'cooperation', 'cooperatively', 'cooperate'],
    ],
    explanation: 'The gaps test subject–verb agreement, a relative pronoun, a result connector, a comparative adjective and word form.',
    hint: 'Read the complete passage first, then identify the grammar required immediately before and after each blank.',
  },
  rewrite(8, 'We really enjoyed the science fair yesterday.', 'FUN', 'We [[0]] at the science fair yesterday.', 'had fun', '“Enjoy oneself” can be rewritten as “have fun”. The past time marker requires “had”.'),
  rewrite(9, 'The printer finishes the job. I will send you the report.', 'WHEN', 'I will send you the report [[0]].', 'when the printer finishes the job', 'In a future time clause, use will in the main clause and the present simple after “when”.'),
  rewrite(10, 'Nam loves collecting old cameras.', 'CRAZY', 'Nam [[0]] old cameras.', 'is crazy about collecting', '“Be crazy about” is followed by a noun or gerund.'),
  rewrite(11, 'Mai is not interested in other people’s negative comments.', 'CARE', 'Mai [[0]] other people’s negative comments.', ["doesn't care about", 'does not care about'], '“Not be interested in” can be expressed as “not care about”.'),
  rewrite(12, 'Many teenagers enjoy this online learning channel.', 'POPULAR', 'This online learning channel [[0]] many teenagers.', 'is popular among', '“Be popular among + group” expresses that many members of a group like something.'),
  rewrite(13, 'My parents allowed me to join the weekend workshop.', 'LET', 'My parents [[0]] the weekend workshop.', 'let me join', 'Use let + object + bare infinitive: let me join.'),
  rewrite(14, 'Heavy traffic affects air quality in the city centre.', 'BY', 'Air quality in the city centre [[0]] heavy traffic.', 'is affected by', 'The present-simple passive is am/is/are + past participle.'),
  rewrite(15, 'Our class is going to organise a charity book sale.', 'PLAN', 'Our class [[0]] a charity book sale.', 'plans to organise', '“Be going to” for an intention can be rewritten with plan + to-infinitive.'),
  rewrite(16, 'Visitors must not enter the laboratory without a guide.', 'ALLOWED', 'Visitors [[0]] the laboratory without a guide.', ["aren't allowed to enter", 'are not allowed to enter'], '“Must not” can be rewritten as be not allowed to + infinitive.'),
  rewrite(17, 'A technician is going to repair our classroom projector.', 'HAVE', 'We are going to [[0]].', 'have our classroom projector repaired', 'The causative structure is have + object + past participle.'),
];

export const grade10Midterm1Supplement: Exam = {
  id: 10901,
  menuLabel: 'Giữa kỳ I · Bổ sung đối chiếu đề 1',
  menuGroup: 'midterm',
  durationMinutes: 45,
  title: 'English 10 · Dạng bài còn thiếu từ đề giữa kỳ I số 1',
  theme: 'Đối chiếu dạng bài · 17 câu · Không gồm Listening',
  sourceNote: 'Chỉ bổ sung các dạng kiến thức chưa có sau khi đối chiếu cấu trúc đề tham khảo. Toàn bộ câu hỏi và bài đọc đã được viết mới; không sao chép nguyên văn và không gồm Listening hoặc Functional Speaking.',
  passageTitle: 'A Weekly Family Meeting',
  passage: 'The Tran family holds a short meeting every Sunday evening. Each member chooses one household duty for the following week. They also discuss any problem that needs a shared decision. At first, it was difficult to find a suitable time, so everyone adjusted their schedule. The meetings have made responsibilities clearer and helped the family become more cooperative.',
  questions,
};
