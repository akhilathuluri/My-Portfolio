// toggle button
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// custom cursor
document.addEventListener('mousemove', (e) => {
  const cursor = document.querySelector('.custom-cursor');
  cursor.style.top = e.pageY + 'px';
  cursor.style.left = e.pageX + 'px';
});


// ip address
document.addEventListener('DOMContentLoaded', () => {
  const ipAddressElement = document.getElementById('ip-address');
  const locationElement = document.getElementById('location');
  const ispElement = document.getElementById('isp');

  fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
          ipAddressElement.textContent = `IP Address: ${data.ip || 'Not Available'}`;
          locationElement.textContent = `Location: ${data.city || 'Unknown'}, ${data.region || 'Unknown'}, ${data.country_name || 'Unknown'}`;
          ispElement.textContent = `ISP: ${data.org || 'Unknown'}`;
      })
      .catch(error => {
          console.error('Error fetching IP information', error);
          ipAddressElement.textContent = 'Unable to fetch IP Address';
          locationElement.textContent = 'Location: Unknown';
          ispElement.textContent = 'ISP: Unknown';
      });
});


// google analytics page views
document.addEventListener('DOMContentLoaded', () => {
  // Simulated API request to get page views
  fetch('https://www.googleapis.com/analytics/v3/data/ga?ids=ga%3A123456789&metrics=ga%3Apageviews&start-date=30daysAgo&end-date=today')
      .then(response => response.json())
      .then(data => {
          const pageViews = data.totalsForAllResults['ga:pageviews'];
          document.getElementById('views').textContent = `Page Views: ${pageViews}`;
      })
      .catch(error => {
          console.error('Error fetching page views', error);
          document.getElementById('views').textContent = 'Page Views: Not Available';
      });
});


// night mode
document.getElementById('modeSwitch').addEventListener('click', function() {
  document.body.classList.toggle('night-mode');
  if (document.body.classList.contains('night-mode')) {
      this.textContent = 'Switch to Day Mode';
  } else {
      this.textContent = 'Switch to Night Mode';
  }
});

// tab title changer
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
        document.title = 'Come back to our portfolio!';
    } else {
        document.title = 'Akhils Portfolio'; // Restore the original title when the tab is in focus
    }
});
