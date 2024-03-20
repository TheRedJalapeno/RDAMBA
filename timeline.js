const timelineElement = document.getElementById('timeline');

const jobs = [
  { title: 'VP Product Marketing', company: 'AiryChat AI', startDate: 'May 2023', endDate: new Date().getFullYear().toString(), logo: 'assets/RDAMBA_Logo_AiryChat.jpg', color: '#E55C20', class: 'jobairy'  },
  { title: 'Director of Marketing Technology', company: 'Discover', startDate: 'March 2022', endDate: 'May 2023', color: '#E55C20', logo: 'assets/RDAMBA_Logo_Discover.jpg', class: 'jobg'  },
  { title: 'Product Marketing Manager', company: 'Amazon', startDate: 'August 2020', endDate: 'February 2022', color: '#FF9900', logo: 'assets/RDAMBA_Logo_Amazon.jpg', class: 'jobf'  },
  { title: 'Director of Product Marketing', company: 'Splash Mktg', startDate: 'February 2018', endDate: 'July 2020', color: '#00a8ff', logo: 'assets/RDAMBA_Logo_Splash.jpg', class: 'jobc'  },
  { title: 'Senior Manager of Product Marketing', company: 'Splash Mktg', startDate: 'February 2014', endDate: 'February 2018', color: '#00a8ff', logo: 'assets/RDAMBA_Logo_Splash.jpg', class: 'jobc'  },
  { title: 'Senior Product Marketing Manager', company: 'Splash Mktg', startDate: 'May 2010', endDate: 'February 2014', color: '#00a8ff', logo: 'assets/RDAMBA_Logo_Splash.jpg', class: 'jobc'  },
];

const timelineStart = new Date(jobs[jobs.length-1].startDate);
const timelineEnd = new Date(jobs[0].endDate);
const timelineDuration = timelineEnd.getMonth() - timelineStart.getMonth() + 
                         (12 * (timelineEnd.getFullYear() - timelineStart.getFullYear()));

jobs.forEach(job => {
  const jobElement = document.createElement('div');
  const jobWrapper = document.createElement('span');
  const logoWrapper = document.createElement('span');
  const detailsWrapper = document.createElement('span');
  const jobLogo = document.createElement('img');
  const jobTitle = document.createElement('span');
  const jobCompany = document.createElement('span');
  const jobStartDate = document.createElement('span');
  const jobEndDate = document.createElement('span');

  const jobStart = new Date(job.startDate);
  const jobEnd = new Date(job.endDate);
  const jobDuration = jobEnd.getMonth() - jobStart.getMonth() + 
                      (12 * (jobEnd.getFullYear() - jobStart.getFullYear()));

  jobTitle.className = 'job-title';
  jobCompany.className = 'job-company';
  jobStartDate.className = 'job-start';
  jobEndDate.className = 'job-end';
  jobWrapper.className = 'job-wrapper';
  jobLogo.className = 'job-logo';
  logoWrapper.className = 'logo-wrapper';
  detailsWrapper.className = 'details-wrapper';

  jobTitle.innerText = job.title;
  jobCompany.innerText = job.company;
  jobStartDate.innerText = job.startDate;
  jobEndDate.innerText = job.endDate;
  
  if (job.logo !== 'null') {
    jobLogo.src = job.logo;
    logoWrapper.appendChild(jobLogo);
} else {
    logoWrapper.classList.add('hidden');
}

  logoWrapper.appendChild(jobLogo);  // append logo to logoWrapper

  detailsWrapper.appendChild(jobTitle);
  detailsWrapper.appendChild(document.createTextNode(" "));
  detailsWrapper.appendChild(jobCompany);
  detailsWrapper.appendChild(document.createTextNode(", "));
  detailsWrapper.appendChild(jobStartDate);
  detailsWrapper.appendChild(document.createTextNode(" to "));
  detailsWrapper.appendChild(jobEndDate);

  jobWrapper.appendChild(logoWrapper);
  jobWrapper.appendChild(detailsWrapper); // append details to detailsWrapper

  jobElement.classList.add(job.class);
  jobElement.className += ' job';
  jobElement.style.height = `${(jobDuration / timelineDuration) * 100}%`;
  jobElement.style.backgroundColor = job.color;
  jobElement.appendChild(jobWrapper);

  timelineElement.appendChild(jobElement);
});
