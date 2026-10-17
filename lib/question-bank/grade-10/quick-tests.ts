import type { Exam, Question } from '@/lib/exams';

type QuickTestSpec = {
  id: number;
  units: string;
  passageTitle: string;
  passage: string;
  answers: string[];
  gapOptions: string[][];
  writing: [string, string, string][];
};

const specs: QuickTestSpec[] = [
  {
    id: 10601, units: 'Units 1–2', passageTitle: 'A Greener Family Routine',
    passage: 'The Le family shares household jobs and tries to live sustainably. Everyone [[0]] a weekly task. They separate recyclable waste [[1]] ordinary rubbish and carry reusable bags when shopping. Mr Le usually drives to work, but this month he [[2]] the bus to reduce emissions. These small habits save energy and strengthen the family [[3]]. The children believe every household can make a positive [[4]] to the environment.',
    answers: ['chooses', 'from', 'is taking', 'bond', 'contribution'],
    gapOptions: [['chooses', 'choosing', 'choose', 'is choose'], ['from', 'with', 'at', 'by'], ['is taking', 'takes always', 'take', 'took now'], ['bond', 'income', 'burden', 'routine'], ['contribution', 'pollution', 'damage', 'argument']],
    writing: [
      ['Our family sorts rubbish before taking it outside', 'Use the present simple for a regular habit.', 'our family / sort / rubbish / before / take / it outside → [[0]]'],
      ['My brother is using a refillable bottle this week', 'Use the present continuous for a temporary action.', 'my brother / use / refillable bottle / this week → [[0]]'],
      ['Sharing chores gives everyone more free time', 'A gerund phrase can be the subject of the sentence.', 'share chores / give / everyone / more free time → [[0]]'],
    ],
  },
  {
    id: 10602, units: 'Units 2–3', passageTitle: 'The School Music Night',
    passage: 'Our school music night raised money for an environmental club. The concert [[0]] local performers and two student bands. Tickets were sold online, so the organisers used [[1]] paper. While the audience [[2]] to the final song, volunteers collected empty bottles for recycling. The event was both entertaining and [[3]]. It showed that music can inspire people to protect the [[4]].',
    answers: ['featured', 'less', 'was listening', 'meaningful', 'environment'],
    gapOptions: [['featured', 'prevented', 'avoided', 'damaged'], ['less', 'fewer much', 'many', 'most'], ['was listening', 'listens', 'listen', 'is listen'], ['meaningful', 'harmful', 'silent', 'ordinary badly'], ['environment', 'performance', 'instrument', 'audience']],
    writing: [
      ['The band performed an inspiring song about clean oceans', 'Use the past simple for a completed performance.', 'band / perform / inspiring song / clean oceans → [[0]]'],
      ['We were collecting bottles when the concert ended', 'Use past continuous for the longer action and past simple for the interruption.', 'we / collect bottles / when / concert / end → [[0]]'],
      ['Music can encourage young people to take action', 'Use encourage + object + to-infinitive.', 'music / encourage / young people / take action → [[0]]'],
    ],
  },
  {
    id: 10603, units: 'Units 3–4', passageTitle: 'Songs for the Community',
    passage: 'A youth group organised a free concert for elderly residents. The students first [[0]] popular songs from different decades. They practised twice a week and invited local musicians to [[1]] them. On the event day, volunteers decorated the hall [[2]] served light refreshments. The residents sang along and said the music made them feel less [[3]]. After the concert, the group decided to make it a [[4]] activity.',
    answers: ['selected', 'coach', 'and', 'lonely', 'monthly'],
    gapOptions: [['selected', 'donated', 'repaired', 'protected'], ['coach', 'prevent', 'collect', 'borrow'], ['and', 'because', 'although', 'unless'], ['lonely', 'patient', 'crowded', 'musical'], ['monthly', 'careless', 'private', 'temporary once']],
    writing: [
      ['The volunteers have organised three community concerts', 'Use the present perfect for achievements up to now.', 'volunteers / organise / three community concerts → [[0]]'],
      ['The singer who visited our centre was very friendly', 'Use who for a person in a defining relative clause.', 'singer / visit / our centre / be / very friendly → [[0]]'],
      ['Helping older people makes our neighbourhood kinder', 'Use a gerund phrase as the subject.', 'help older people / make / neighbourhood / kinder → [[0]]'],
    ],
  },
  {
    id: 10604, units: 'Units 4–5', passageTitle: 'A Useful Community Invention',
    passage: 'Students at Hoa Binh School designed a simple reminder device for older people. The small box can [[0]] users when it is time to take medicine. It was built from inexpensive parts [[1]] the team wanted local families to afford it. The first model [[2]] by three volunteers last month. Their feedback helped the students improve the screen and make the buttons [[3]]. The invention may soon be used at the community health [[4]].',
    answers: ['alert', 'because', 'was tested', 'clearer', 'centre'],
    gapOptions: [['alert', 'pollute', 'replace people', 'donate from'], ['because', 'but', 'unless', 'despite'], ['was tested', 'tested itself', 'is testing yesterday', 'has test'], ['clearer', 'most unclear', 'clearly than', 'less clear than before only'], ['centre', 'audience', 'melody', 'application']],
    writing: [
      ['The device was designed by a group of students', 'Use the past passive: was + past participle.', 'device / design / group of students → [[0]]'],
      ['This invention is easier to use than the old model', 'Use the comparative adjective easier.', 'invention / easy / use / old model → [[0]]'],
      ['Volunteers tested the product before giving feedback', 'Use before + V-ing when the subject is unchanged.', 'volunteers / test / product / before / give feedback → [[0]]'],
    ],
  },
  {
    id: 10605, units: 'Units 6–7', passageTitle: 'Equal Voices in a Youth Forum',
    passage: 'A regional youth forum invited equal numbers of girls and boys from six countries. Every participant had the [[0]] to lead a discussion. The organisers believed leadership should be based [[1]] ability rather than gender. During the forum, students [[2]] ideas about education and community service. They also learned how international organisations [[3]] cooperation among young people. At the end, each team presented one practical [[4]].',
    answers: ['opportunity', 'on', 'exchanged', 'promote', 'proposal'],
    gapOptions: [['opportunity', 'inequality', 'obstacle', 'stereotype'], ['on', 'at', 'from', 'into'], ['exchanged', 'destroyed', 'prevented', 'ignored'], ['promote', 'refuse', 'limit', 'divide'], ['proposal', 'conflict', 'income', 'instrument']],
    writing: [
      ['All participants should be treated equally', 'Use the passive with should: should be + past participle.', 'all participants / should / treat / equally → [[0]]'],
      ['The organisation whose office is in Ha Noi supports young leaders', 'Use whose to show possession.', 'organisation / office / Ha Noi / support / young leaders → [[0]]'],
      ['Both girls and boys can become effective leaders', 'Use both ... and to include two equal groups.', 'both / girls / boys / can become / effective leaders → [[0]]'],
    ],
  },
  {
    id: 10606, units: 'Units 7–8', passageTitle: 'An International Online Classroom',
    passage: 'A Vietnamese class joined an online project with students from three other countries. The platform allowed them to [[0]] ideas without travelling. Each group researched an international organisation and uploaded a short [[1]]. Before the live meeting, students had to check their microphones [[2]] prepare two questions. Their teacher said online tools could make learning more [[3]], but students still needed to evaluate information [[4]].',
    answers: ['exchange', 'presentation', 'and', 'interactive', 'carefully'],
    gapOptions: [['exchange', 'damage', 'hide', 'cancel'], ['presentation', 'pollutant', 'routine', 'burden'], ['and', 'or else never', 'although', 'because of'], ['interactive', 'isolated', 'unequal', 'silent'], ['carefully', 'careless', 'care', 'most careful than']],
    writing: [
      ['The website which we use is easy to navigate', 'Use which for a thing in a relative clause.', 'website / we use / easy / navigate → [[0]]'],
      ['Students can learn at their own pace online', 'Use can + base verb.', 'students / can / learn / own pace / online → [[0]]'],
      ['We should check whether an online source is reliable', 'Use whether to introduce an indirect yes/no question.', 'we / should check / online source / reliable → [[0]]'],
    ],
  },
  {
    id: 10607, units: 'Units 8–9', passageTitle: 'A Digital Climate Project',
    passage: 'Students used a shared digital board to study climate change. They posted photographs, charts and links from [[0]] sources. Because everyone could edit the board, the class updated information [[1]]. One group created a video explaining how forests [[2]] carbon dioxide. Another group suggested actions that could reduce the school’s carbon [[3]]. The project combined online learning with practical environmental [[4]].',
    answers: ['reliable', 'quickly', 'absorb', 'footprint', 'action'],
    gapOptions: [['reliable', 'harmful', 'careless', 'temporary'], ['quickly', 'quick', 'quicker than all', 'quickness'], ['absorb', 'release only', 'invent', 'download'], ['footprint', 'device', 'curriculum', 'melody'], ['action', 'inequality', 'argument', 'income']],
    writing: [
      ['The files have been shared with the whole class', 'Use the present perfect passive.', 'files / share / whole class → [[0]]'],
      ['Using less electricity reduces our carbon footprint', 'Use a gerund phrase as the subject.', 'use less electricity / reduce / carbon footprint → [[0]]'],
      ['The students uploaded the chart after checking the data', 'Use after + V-ing for the earlier action.', 'students / upload chart / after / check data → [[0]]'],
    ],
  },
  {
    id: 10608, units: 'Units 9–10', passageTitle: 'A Low-Impact Island Tour',
    passage: 'An island community developed a small ecotourism programme to protect local wildlife. Visitors travel in groups of no more than eight and stay in family-run homes. Before each trip, guides explain why tourists must not [[0]] animals or leave rubbish behind. Part of every tour fee is used to [[1]] damaged forest. Local residents also sell handmade products, which creates jobs [[2]] encouraging mass tourism. Since the programme began, the beach has become [[3]] and more sea birds have returned. The organisers hope the model will remain both profitable and [[4]].',
    answers: ['disturb', 'restore', 'without', 'cleaner', 'sustainable'],
    gapOptions: [['disturb', 'observe quietly', 'protect', 'photograph safely'], ['restore', 'pollute', 'remove all', 'ignore'], ['without', 'because', 'despite of', 'so that not'], ['cleaner', 'most dirty', 'more polluted', 'cleanly'], ['sustainable', 'harmful', 'temporary only', 'crowded']],
    writing: [
      ['Tourists are asked to follow the wildlife rules', 'Use the passive: are asked + to-infinitive.', 'tourists / ask / follow / wildlife rules → [[0]]'],
      ['The island is quieter than the nearby resort', 'Use the comparative adjective quieter.', 'island / quiet / nearby resort → [[0]]'],
      ['Ecotourism can create jobs while protecting nature', 'Use while + V-ing for simultaneous effects.', 'ecotourism / create jobs / while / protect nature → [[0]]'],
    ],
  },
];

function makeQuickTest(spec: QuickTestSpec): Exam {
  const reading: Question = {
    id: 1,
    section: 'Reading',
    skillArea: 'Reading',
    prompt: 'Read the passage and choose the best option for each numbered blank.',
    options: [],
    answer: spec.answers,
    explanation: 'Use grammar, collocation and the meaning of the complete passage to choose each answer.',
    kind: 'cloze-dropdown',
    template: spec.passage,
    gapOptions: spec.gapOptions,
  };
  const writing: Question[] = spec.writing.map(([answer, explanation, template], index) => ({
    id: index + 2,
    section: 'Writing',
    skillArea: 'Writing',
    prompt: 'Write a complete sentence from the cues. You may change word forms or add necessary words.',
    options: [],
    answer,
    explanation,
    kind: 'typed',
    template,
    hint: 'Identify the target grammar, then build a full sentence. Capital letters and final punctuation are not graded.',
  }));
  return {
    id: spec.id,
    menuLabel: `Kiểm tra 15 phút · ${spec.units}`,
    menuGroup: 'quick-test',
    durationMinutes: 15,
    title: `English 10 · Kiểm tra 15 phút (${spec.units})`,
    theme: `${spec.units} · Reading & Writing · 15 phút`,
    sourceNote: 'Bộ câu hỏi nguyên bản, được biên soạn theo cấu trúc bài kiểm tra thường xuyên; chỉ giữ Reading và Writing, không gồm Listening hoặc Functional Speaking.',
    passageTitle: spec.passageTitle,
    passage: spec.passage.replace(/\[\[\d+\]\]/g, '_____'),
    questions: [reading, ...writing],
  };
}

export const quickTests10 = specs.map(makeQuickTest);
