export const aptitudeData = {
  quantitative: [],
  logical: [],
  verbal: [],
  "data-interpretation": []
};

// Generate 75 Quantitative Questions
for (let i = 0; i < 75; i++) {
  const base = Math.floor(Math.random() * 50) + 10;
  const percent = Math.floor(Math.random() * 9) * 10 + 10; 
  const ans = (base * percent) / 100;
  
  const options = [
    (ans + Math.random() * 5).toFixed(1).toString(),
    ans.toFixed(1).toString(),
    (ans - Math.random() * 5).toFixed(1).toString(),
    (ans + 10).toFixed(1).toString()
  ].sort(() => Math.random() - 0.5);
  
  const ansIndex = options.indexOf(ans.toFixed(1).toString());

  aptitudeData.quantitative.push({
    q: `What is ${percent}% of ${base}?`,
    options: options,
    answerIndex: ansIndex,
    explanation: `${percent}% of ${base} is calculated as (${percent}/100) * ${base} = ${ans.toFixed(1)}.`
  });
}

// Generate 75 Logical Questions
for (let i = 0; i < 75; i++) {
  const start = Math.floor(Math.random() * 10) + 1;
  const step = Math.floor(Math.random() * 5) + 2;
  const arr = [start, start + step, start + step * 2, start + step * 3];
  const ans = start + step * 4;
  
  const options = [
    (ans + step).toString(),
    ans.toString(),
    (ans - 1).toString(),
    (ans + 2).toString()
  ].sort(() => Math.random() - 0.5);
  
  const ansIndex = options.indexOf(ans.toString());

  aptitudeData.logical.push({
    q: `Complete the sequence: ${arr.join(', ')}, ?`,
    options: options,
    answerIndex: ansIndex,
    explanation: `The sequence increases by a constant step of ${step}. Therefore, ${arr[3]} + ${step} = ${ans}.`
  });
}

// Generate 75 Verbal Questions
const verbalTemplates = [
  { q: "Choose the synonym for 'Ebullient'.", a: "Enthusiastic", o: ["Melancholy", "Enthusiastic", "Apathetic", "Lethargic"] },
  { q: "Choose the antonym for 'Cacophony'.", a: "Harmony", o: ["Noise", "Harmony", "Racket", "Discord"] },
  { q: "Identify the error: 'He go to the store yesterday.'", a: "go", o: ["He", "go", "to", "yesterday"] }
];
for (let i = 0; i < 75; i++) {
  const t = verbalTemplates[i % verbalTemplates.length];
  const options = [...t.o].sort(() => Math.random() - 0.5);
  aptitudeData.verbal.push({
    q: t.q,
    options: options,
    answerIndex: options.indexOf(t.a),
    explanation: `The correct answer is '${t.a}'.`
  });
}

// Generate 75 Data Interpretation Questions
for (let i = 0; i < 75; i++) {
  const a = Math.floor(Math.random() * 100) + 50;
  const b = Math.floor(Math.random() * 100) + 50;
  const ans = (a + b).toString();
  
  const options = [
    ans,
    (a + b + 10).toString(),
    (a + b - 5).toString(),
    (a + b + 20).toString()
  ].sort(() => Math.random() - 0.5);
  
  aptitudeData["data-interpretation"].push({
    q: `A company sold ${a} units in Q1 and ${b} units in Q2. What is the total sales for the first half of the year?`,
    options: options,
    answerIndex: options.indexOf(ans),
    explanation: `Total = Q1 + Q2 = ${a} + ${b} = ${ans}.`
  });
}
