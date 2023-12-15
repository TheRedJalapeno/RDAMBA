const timelineElement = document.getElementById('timeline');

const jobs = [
  { title: 'Angel Investor', company: 'AiryChat AI', startDate: '2023', endDate: new Date().getFullYear().toString(), color: '#E55C20', logo: 'assets/RDAMBA_Logo_AiryChat.jpg', class: 'jobairy'  },
  { title: 'Director', company: 'Discover', startDate: '2022', endDate: '2023', color: '#E55C20', logo: 'assets/RDAMBA_Logo_Discover.jpg', class: 'jobg'  },
  { title: 'Senior Manager', company: 'Amazon', startDate: '2020', endDate: '2022', color: '#FF9900', logo: 'assets/RDAMBA_Logo_Amazon.jpg', class: 'jobf'  },
  { title: 'Senior Manager', company: 'Holland America', startDate: '2019', endDate: '2020', color: '#132356', logo: 'assets/RDAMBA_Logo_Holland.jpg', class: 'jobe'  },
  { title: 'Manager', company: 'Amazon', startDate: '2018', endDate: '2019', color: '#FF9900', logo: 'assets/RDAMBA_Logo_Amazon.jpg', class: 'jobd'  },
  { title: 'Head of Product', company: 'Splash Mktg', startDate: '2010', endDate: '2018', color: '#00a8ff', logo: 'assets/RDAMBA_Logo_Splash.jpg', class: 'jobc'  },
  { title: 'General Manager', company: 'FITV', startDate: '2007', endDate: '2010', color: 'wheat', logo: 'assets/RDAMBA_Logo_FITV.jpg', class: 'jobz' },
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
