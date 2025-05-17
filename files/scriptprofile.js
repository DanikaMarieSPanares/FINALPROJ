function loadProfile() {
      const firstName = localStorage.getItem('firstName');
      const lastName = localStorage.getItem('lastName');
      const email = localStorage.getItem('email');
      const sex = localStorage.getItem('sex');
      const supportReason = localStorage.getItem('supportReason');

      if (!firstName || !lastName || !email || !sex || !supportReason) {
        // If any required info missing, redirect to signup page
        window.location.href = 'signup.html';
        return;
      }

      document.getElementById('firstName').textContent = firstName;
      document.getElementById('lastName').textContent = lastName;
      document.getElementById('email').textContent = email;

      let sexText = '';
      switch(sex) {
        case 'male':
          sexText = 'Male';
          break;
        case 'female':
          sexText = 'Female';
          break;
        case 'preferNotToSay':
          sexText = 'Prefer not to say';
          break;
        default:
          sexText = sex;
      }
      document.getElementById('sex').textContent = sexText;

      document.getElementById('supportReason').textContent = supportReason;
    }

    document.getElementById('logoutBtn').addEventListener('click', () => {
      localStorage.clear();
      window.location.href = 'signup.html';
    });

    loadProfile();