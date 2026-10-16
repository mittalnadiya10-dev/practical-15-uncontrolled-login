import React from 'react';

function App() {
  function handleLogin(e) {
    e.preventDefault();

    // Standard JavaScript form data retrieval (No useRef, No useState)
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    const rememberMe = e.target.elements.remember.checked;

    // Display submitted information using standard JavaScript DOM manipulation
    const outputContainer = document.getElementById('login-result');
    const userDisplay = document.getElementById('res-username');
    const passDisplay = document.getElementById('res-password-length');
    const rememberDisplay = document.getElementById('res-remember');
    const timeDisplay = document.getElementById('res-time');

    if (outputContainer) {
      userDisplay.textContent = username;
      passDisplay.textContent = password.length + ' chars (secured)';
      rememberDisplay.textContent = rememberMe ? 'Enabled' : 'Disabled';
      timeDisplay.textContent = new Date().toLocaleTimeString();

      // Make output container visible
      outputContainer.classList.remove('hidden');
    }

    // Reset password field using standard JS
    e.target.elements.password.value = '';
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-sm border border-slate-200 p-6">
        <h1 className="text-xl font-bold text-slate-800 mb-1">Staff Login</h1>
        <p className="text-xs text-slate-500 mb-5">
          Uncontrolled Component using Standard JavaScript (No useRef / useState)
        </p>

        <form onSubmit={handleLogin} className="space-y-3.5">
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Username / ID</label>
            <input
              type="text"
              name="username"
              required
              defaultValue="Jaiminpuri Bava"
              placeholder="Enter username"
              className="w-full p-2 border border-slate-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              required
              placeholder="••••••••"
              className="w-full p-2 border border-slate-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center space-x-2 pt-0.5">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="rounded border-slate-300 text-blue-600 focus:ring-0"
            />
            <label htmlFor="remember" className="text-xs text-slate-600 cursor-pointer">
              Remember my session
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded text-xs transition"
          >
            Authenticate & Login
          </button>
        </form>

        {/* Output container updated via Vanilla JS DOM manipulation */}
        <div id="login-result" className="hidden mt-5 p-3 bg-slate-50 border border-slate-200 rounded text-xs space-y-1">
          <h3 className="font-semibold text-slate-700 uppercase tracking-wider text-[11px] mb-1">
            Submitted Information (Retrieved via Standard JS):
          </h3>
          <p className="text-slate-600">
            <span className="font-medium text-slate-800">User: </span>
            <span id="res-username"></span>
          </p>
          <p className="text-slate-600">
            <span className="font-medium text-slate-800">Password: </span>
            <span id="res-password-length"></span>
          </p>
          <p className="text-slate-600">
            <span className="font-medium text-slate-800">Remember: </span>
            <span id="res-remember"></span>
          </p>
          <p className="text-slate-600">
            <span className="font-medium text-slate-800">Time: </span>
            <span id="res-time"></span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
