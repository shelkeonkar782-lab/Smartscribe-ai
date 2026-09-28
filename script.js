// ============================================
// SmartScribe AI — script.js
// All JavaScript logic lives here
// ============================================

// ── Tab Switching ──
// This function switches between the 3 tabs
// Summarize, Translate and Chat
function switchTab(tab, el) {
  // Remove active from all tabs
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  // Remove active from all cards
  document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));
  // Add active to clicked tab
  el.classList.add('active');
  // Show the correct card
  document.getElementById('tab-' + tab).classList.add('active');
}

// ── Call Claude AI API ──
// This function sends text to AI and gets a reply
async function callAI(prompt, system) {
  const body = {
    model: 'claude-sonnet-4-6',
    max_tokens: 1000,
    messages: [{ role: 'user', content: prompt }]
  };

  // If system instruction is given add it
  if (system) body.system = system;

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });

  const data = await response.json();
  return data.content[0].text;
}

// ── Text Summarizer ──
// Runs when user clicks Summarize Text button
async function summarizeText() {
  // Get text from input box
  const text = document.getElementById('summarizeInput').value.trim();
  // Get selected length
  const length = document.getElementById('summaryLength').value;

  // If empty show toast and stop
  if (!text) {
    showToast('Please enter some text first!');
    return;
  }

  // Get DOM elements
  const btn     = document.getElementById('summarizeBtn');
  const loading = document.getElementById('summarizeLoading');
  const output  = document.getElementById('summarizeOutput');
  const result  = document.getElementById('summarizeResult');

  // Show loading and disable button
  btn.disabled = true;
  loading.classList.add('show');
  output.classList.remove('show');

  // Map length to instruction
  const map = {
    short:    'in 2 to 3 sentences only',
    medium:   'in one clear paragraph',
    detailed: 'as a bullet point breakdown of key points'
  };

  try {
    // Call AI with prompt
    const summary = await callAI(
      `Summarize the following text ${map[length]}. Be clear and concise:\n\n${text}`
    );
    // Show result
    result.textContent = summary;
    output.classList.add('show');
  } catch (e) {
    result.textContent = 'Something went wrong. Please try again!';
    output.classList.add('show');
  }

  // Hide loading and enable button
  btn.disabled = false;
  loading.classList.remove('show');
}

// ── Text Translator ──
// Runs when user clicks Translate Text button
async function translateText() {
  // Get text and selected language
  const text = document.getElementById('translateInput').value.trim();
  const lang = document.getElementById('targetLang').value;

  // If empty show toast and stop
  if (!text) {
    showToast('Please enter some text first!');
    return;
  }

  // Get DOM elements
  const btn     = document.getElementById('translateBtn');
  const loading = document.getElementById('translateLoading');
  const output  = document.getElementById('translateOutput');
  const result  = document.getElementById('translateResult');

  // Show loading and disable button
  btn.disabled = true;
  loading.classList.add('show');
  output.classList.remove('show');

  try {
    // Call AI with translation prompt
    const translation = await callAI(
      `Translate the following text to ${lang}. Only provide the translation, nothing else:\n\n${text}`
    );
    // Show result
    result.textContent = translation;
    output.classList.add('show');
  } catch (e) {
    result.textContent = 'Something went wrong. Please try again!';
    output.classList.add('show');
  }

  // Hide loading and enable button
  btn.disabled = false;
  loading.classList.remove('show');
}

// ── Chatbot ──
// Store full conversation history
const chatHistory = [];

// Runs when user clicks Send or presses Enter
async function sendChat() {
  // Get user message
  const input   = document.getElementById('chatInput');
  const msg     = input.value.trim();

  // If empty stop
  if (!msg) return;

  const sendBtn  = document.getElementById('chatSendBtn');
  const messages = document.getElementById('chatMessages');
  const empty    = document.getElementById('chatEmpty');

  // Remove empty placeholder
  if (empty) empty.remove();

  // Add user message bubble
  messages.innerHTML += `
    <div class="msg user">
      <div class="msg-avatar">👤</div>
      <div class="msg-bubble">${msg}</div>
    </div>`;

  // Clear input and disable send button
  input.value = '';
  sendBtn.disabled = true;

  // Add loading bubble with unique ID
  const loadingId = 'l' + Date.now();
  messages.innerHTML += `
    <div class="msg ai" id="${loadingId}">
      <div class="msg-avatar">🤖</div>
      <div class="msg-bubble" style="color:var(--muted)">Thinking...</div>
    </div>`;

  // Scroll to bottom
  messages.scrollTop = messages.scrollHeight;

  // Add user message to history
  chatHistory.push({ role: 'user', content: msg });

  try {
    // Call AI with full chat history
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1000,
        system: 'You are SmartScribe, a helpful and friendly AI assistant. Keep responses clear, concise and helpful.',
        messages: chatHistory
      })
    });

    const data  = await response.json();
    const reply = data.content[0].text;

    // Add AI reply to history
    chatHistory.push({ role: 'assistant', content: reply });

    // Replace loading bubble with real reply
    document.getElementById(loadingId).outerHTML = `
      <div class="msg ai">
        <div class="msg-avatar">🤖</div>
        <div class="msg-bubble">${reply}</div>
      </div>`;

  } catch (e) {
    // Show error in bubble
    document.getElementById(loadingId).outerHTML = `
      <div class="msg ai">
        <div class="msg-avatar">🤖</div>
        <div class="msg-bubble" style="color:var(--error)">
          Something went wrong. Please try again!
        </div>
      </div>`;
  }

  // Enable send button and scroll down
  sendBtn.disabled = false;
  messages.scrollTop = messages.scrollHeight;
}

// ── Copy Output ──
// Copies summary or translation to clipboard
function copyOutput(id) {
  const text = document.getElementById(id).textContent;
  navigator.clipboard.writeText(text)
    .then(() => showToast('Copied! ✅'));
}

// ── Show Toast Notification ──
// Shows a small popup message at bottom
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}