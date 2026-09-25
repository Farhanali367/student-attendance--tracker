/* Welcome Page */

.welcome-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #0f172a, #1e3a8a);
  padding: 20px;
}

.welcome-card {
  width: 100%;
  max-width: 520px;
  background: white;
  padding: 45px;
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.welcome-icon {
  width: 72px;
  height: 72px;
  margin: 0 auto 20px;
  border-radius: 18px;
  background: #2563eb;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
}

.welcome-card h1 {
  font-size: 32px;
  margin-bottom: 12px;
  color: #111827;
}

.welcome-card p {
  color: #6b7280;
  margin-bottom: 28px;
  font-size: 16px;
}

.welcome-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.login-btn,
.signup-btn {
  padding: 14px;
  border: none;
  border-radius: 10px;
  color: white;
  font-weight: 700;
  font-size: 15px;
}

.login-btn {
  background: #2563eb;
}

.login-btn:hover {
  background: #1d4ed8;
}

.signup-btn {
  background: #16a34a;
}

.signup-btn:hover {
  background: #15803d;
}

@media (max-width: 600px) {
  .welcome-buttons {
    grid-template-columns: 1fr;
  }

  .welcome-card {
    padding: 30px 20px;
  }

  .welcome-card h1 {
    font-size: 26px;
  }
}
