const jobs = [
    {
        id: "j1",
        title: "Front-End Software Developer",
        company: "Spotify"
    },
    {
        id: "j2",
        title: "Back-End Software Developer",
        company: "Meta"
    },
    {
        id: "j3",
        title: "Professor",
        company: "Concordia University"
    },
    {
        id: "j4",
        title: "Fry Cook",
        company: "McDonald's"
    },
    {
        id: "j5",
        title: "Graphic Designer",
        company: "Some Company"
    },
    {
        id: "j6",
        title: "Bitcoin Investor",
        company: "Wall Street"
    },
    {
        id: "j7",
        title: "Full-Stack Developer",
        company: "Google"
    },
    {
        id: "j8",
        title: "Data Scientist",
        company: "Pratt & Whitney"
    },
    {
        id: "j9",
        title: "Front-End Software Developer",
        company: "Spotify"
    },
    {
        id: "j10",
        title: "Back-End Software Developer",
        company: "Meta"
    },
    {
        id: "j11",
        title: "Professor",
        company: "Concordia University"
    },
    {
        id: "j12",
        title: "Fry Cook",
        company: "McDonald's"
    },
    {
        id: "j13",
        title: "Graphic Designer",
        company: "Some Company"
    },
    {
        id: "j14",
        title: "Bitcoin Investor",
        company: "Wall Street"
    },
    {
        id: "j15",
        title: "Full-Stack Developer",
        company: "Google"
    },
    {
        id: "j16",
        title: "Data Scientist",
        company: "Pratt & Whitney"
    }
]

export function myJobs() {
    return jobs;
  }

export function findJob(id) {
    return jobs.filter(job=>Object.values(job).indexOf(id)>-1)[0];
}