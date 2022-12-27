// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    title: "Mr.Smartypants",
    timeLimit: 3600,
    questions: [{
      text: "Найди лишнее",
      timeLimit: 60,
      type: "radio",
      answers: [
        {text: "Мама", valid: false},
        {text: "Папа", valid: false},
        {text: "Кукуруза", valid: true},
        {text: "Дедушка", valid: false}
      ]
    },
    {
      text: "Best King Crimson era",
      timeLimit: 60,
      type: "radio",
      answers: [
        {text: "Pre-Larks", valid: false},
        {text: "Larks'", valid: false},
        {text: "Belew", valid: true},
        {text: "Post-Thrak", valid: false}
      ]
    }]
  })
}
