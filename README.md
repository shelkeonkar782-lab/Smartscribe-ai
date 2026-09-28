# 🤖 SmartScribe — AI Text Assistant

![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Claude AI](https://img.shields.io/badge/Claude_AI-Anthropic-orange?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Complete-brightgreen?style=for-the-badge)

---

## 📌 Project Overview

**SmartScribe** is an AI powered web text assistant built with pure HTML, CSS and Vanilla JavaScript, integrated with the Claude AI API by Anthropic.

The tool combines three powerful features in one clean interface:
- Summarize any long text into a short concise form
- Translate text into any chosen language instantly
- Chat with an AI assistant like ChatGPT

This project was developed to understand real-world AI API integration and modern web development techniques using core fundamentals — no frameworks, no libraries.

---

## 💡 Project Idea & Purpose

### Why I built this:

As a student I often need to:
- Summarize long articles and study material quickly
- Translate foreign language content to understand better
- Ask AI questions while learning new topics

Most tools available online do only ONE thing at a time. I wanted to build **one single tool** that solves all three problems together in a clean and simple interface — completely free, no login required.

### Who needs this:

| User | Use Case |
|------|----------|
| Students | Summarize study material, translate content |
| Professionals | Summarize long emails, translate documents |
| Learners | Ask AI questions, get instant help |
| Anyone | Who needs quick AI assistance for free |

---

## 🎯 Objectives

- ✅ Build a real AI powered web application
- ✅ Integrate Claude AI API into a frontend project
- ✅ Create a summarizer for long text content
- ✅ Build a multi-language text translator
- ✅ Develop a conversational AI chatbot
- ✅ Design a clean modern white UI
- ✅ Handle API errors gracefully
- ✅ Make it fully responsive for all devices

---

## ⚙️ Features

### 1. 📝 Text Summarizer
Summarizes any long text into a short clear form.

Three summary length options:
- **Short** — 2 to 3 sentences only
- **Medium** — One clear paragraph
- **Detailed** — Key points breakdown

```
Input  → Paste any long article, essay, or notes
Output → Clean concise summary instantly
```

---

### 2. 🌐 Text Translator
Translates any text into 12 different languages instantly.

Supported languages:
- Hindi, Marathi
- Spanish, French, German
- Japanese, Chinese, Korean
- Arabic, Portuguese, Russian, Italian

```
Input  → Type or paste any text
Select → Choose target language
Output → Accurate translation instantly
```

---

### 3. 💬 AI Chatbot
A conversational AI assistant that remembers the full conversation.

```
Ask anything → AI replies instantly
Full chat history maintained
Friendly and clear responses
Works like ChatGPT!
```

---

### 4. 🎨 Clean Modern UI
- Pure white modern design
- Smooth tab switching animation
- Loading spinner while AI thinks
- Copy to clipboard button
- Toast notification on copy
- Fully responsive design

---

## 🛠️ Technologies Used

| Technology | Purpose |
|-----------|---------|
| HTML5 | Complete structure and layout |
| CSS3 | White modern theme, animations, responsive |
| Vanilla JavaScript | All logic, DOM manipulation, API calls |
| Claude AI API | AI brain — summarize, translate, chat |

> No frameworks. No libraries. No dependencies.
> Pure fundamentals + Real AI integration!

---

## 📂 Project Structure

```
smartscribe-ai/
│
├── index.html    → Complete HTML structure
├── style.css     → All styling and animations
├── script.js     → All JavaScript and AI logic
└── README.md     → Project documentation
```

---

## 🌐 Live Demo

👉 **[Click here to try SmartScribe](https://shelkeonkar782-lab.github.io/smartscribe-ai)**

---

## ▶️ How to Run Locally

**1. Clone the repository**
```bash
git clone https://github.com/shelkeonkar782-lab/smartscribe-ai.git
```

**2. Open the project folder**
```bash
cd smartscribe-ai
```

**3. Open with Live Server**
```
Use VS Code Live Server extension
Right click index.html
Click "Open with Live Server"
```

> ⚠️ Important: The AI features require a live
> server or deployed link to work properly.
> Direct file opening will block API calls.

---

## 🧪 Example Usage

### Summarizer Example:
```
Input:
"Artificial intelligence is transforming 
the world at an unprecedented pace. 
From healthcare to education, AI tools 
are being used everywhere..."

Output (Short):
"AI is rapidly changing industries like
healthcare and education by automating
tasks and improving efficiency."
```

### Translator Example:
```
Input  : Hello, how are you?
Language: Hindi
Output : नमस्ते, आप कैसे हैं?
```

### Chatbot Example:
```
User : What is machine learning?
AI   : Machine learning is a branch of AI
       where computers learn from data
       without being explicitly programmed...
```

---

## 🚧 Challenges Faced

| Challenge | Solution |
|-----------|----------|
| CORS error on localhost | Deployed on GitHub Pages |
| AI forgetting chat history | Stored chatHistory array, sent full history each time |
| UI freezing while AI thinks | Added loading spinner, disabled button during call |
| API errors crashing app | Added try/catch error handling |
| Tab switching logic | Used classList add/remove active |

---

## 🔮 Future Improvements

```
→ Voice input feature
→ PDF summarizer
→ Save and export chat history
→ More language options
→ Dark mode toggle
→ Text to speech output
→ Word count display
→ Translation history
```

---

## 🧠 How the AI Works

```
User types text
      ↓
JavaScript sends it to
Claude AI API (Anthropic)
      ↓
API processes the request
      ↓
AI generates response
      ↓
JavaScript receives reply
      ↓
Shows on screen instantly ⚡
```

---

## 📚 What I Learned

Through this project, I practiced:
- Calling a real AI API from JavaScript
- Async/await for handling API requests
- Error handling with try/catch blocks
- DOM manipulation without frameworks
- CSS animations and transitions
- Responsive web design
- Managing conversation history in arrays
- Loading states and user experience
- Deploying a web app on GitHub Pages
- Git and GitHub project management

---

## 👨‍💻 Author

**Onkar Shelke**

![HTML](https://img.shields.io/badge/HTML-Learning-orange?style=flat-square)
![CSS](https://img.shields.io/badge/CSS-Learning-blue?style=flat-square)
![JavaScript](https://img.shields.io/badge/JavaScript-Learning-yellow?style=flat-square)
![AI](https://img.shields.io/badge/AI_Integration-Building-purple?style=flat-square)

- 🎓 BBA(CA) Graduate — Savitribai Phule Pune University, Pune
- 💻 Currently learning Web Development & AI Integration
- 🔐 Interested in Cybersecurity
- 📍 Pune, Maharashtra, India
- 🌐 [LinkedIn](https://linkedin.com/in/onkar-shelke1)
- 💻 [GitHub](https://github.com/shelkeonkar782-lab)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">⭐ If you found this helpful, give it a star! ⭐</p>
