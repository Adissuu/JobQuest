const jobs = [
  {
    id: "j1",
    title: "Front-End Software Developer",
    company: "Spotify",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula scelerisque nulla, vel dignissim lectus blandit eget. Vestibulum at tellus ex. Curabitur tincidunt metus ut vulputate sodales. Nulla hendrerit, felis at finibus ornare, ex nisi pharetra mi, quis dictum ex libero nec purus. Ut hendrerit purus vitae tortor dignissim, nec dapibus tellus mollis. Curabitur sagittis arcu vel sem ultricies, id egestas orci luctus. Vestibulum non tincidunt tellus. Nunc at augue non diam elementum volutpat. Donec non massa non diam volutpat lobortis. Curabitur nec scelerisque leo. Fusce vitae lacus sem.",
  },
  {
    id: "j2",
    title: "Back-End Software Developer",
    company: "Meta",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula scelerisque nulla, vel dignissim lectus blandit eget. Vestibulum at tellus ex. Curabitur tincidunt metus ut vulputate sodales. Nulla hendrerit, felis at finibus ornare, ex nisi pharetra mi, quis dictum ex libero nec purus. Ut hendrerit purus vitae tortor dignissim, nec dapibus tellus mollis. Curabitur sagittis arcu vel sem ultricies, id egestas orci luctus. Vestibulum non tincidunt tellus. Nunc at augue non diam elementum volutpat. Donec non massa non diam volutpat lobortis. Curabitur nec scelerisque leo. Fusce vitae lacus sem.",
  },
  {
    id: "j3",
    title: "Professor",
    company: "Concordia University",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula scelerisque nulla, vel dignissim lectus blandit eget. Vestibulum at tellus ex. Curabitur tincidunt metus ut vulputate sodales. Nulla hendrerit, felis at finibus ornare, ex nisi pharetra mi, quis dictum ex libero nec purus. Ut hendrerit purus vitae tortor dignissim, nec dapibus tellus mollis. Curabitur sagittis arcu vel sem ultricies, id egestas orci luctus. Vestibulum non tincidunt tellus. Nunc at augue non diam elementum volutpat. Donec non massa non diam volutpat lobortis. Curabitur nec scelerisque leo. Fusce vitae lacus sem.",
  },
  {
    id: "j4",
    title: "Fry Cook",
    company: "McDonald's",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula scelerisque nulla, vel dignissim lectus blandit eget. Vestibulum at tellus ex. Curabitur tincidunt metus ut vulputate sodales. Nulla hendrerit, felis at finibus ornare, ex nisi pharetra mi, quis dictum ex libero nec purus. Ut hendrerit purus vitae tortor dignissim, nec dapibus tellus mollis. Curabitur sagittis arcu vel sem ultricies, id egestas orci luctus. Vestibulum non tincidunt tellus. Nunc at augue non diam elementum volutpat. Donec non massa non diam volutpat lobortis. Curabitur nec scelerisque leo. Fusce vitae lacus sem."
  },
  {
    id: "j5",
    title: "Graphic Designer",
    company: "Some Company",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula scelerisque nulla, vel dignissim lectus blandit eget. Vestibulum at tellus ex. Curabitur tincidunt metus ut vulputate sodales. Nulla hendrerit, felis at finibus ornare, ex nisi pharetra mi, quis dictum ex libero nec purus. Ut hendrerit purus vitae tortor dignissim, nec dapibus tellus mollis. Curabitur sagittis arcu vel sem ultricies, id egestas orci luctus. Vestibulum non tincidunt tellus. Nunc at augue non diam elementum volutpat. Donec non massa non diam volutpat lobortis. Curabitur nec scelerisque leo. Fusce vitae lacus sem."
  },
  {
    id: "j6",
    title: "Bitcoin Investor",
    company: "Wall Street",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula scelerisque nulla, vel dignissim lectus blandit eget. Vestibulum at tellus ex. Curabitur tincidunt metus ut vulputate sodales. Nulla hendrerit, felis at finibus ornare, ex nisi pharetra mi, quis dictum ex libero nec purus. Ut hendrerit purus vitae tortor dignissim, nec dapibus tellus mollis. Curabitur sagittis arcu vel sem ultricies, id egestas orci luctus. Vestibulum non tincidunt tellus. Nunc at augue non diam elementum volutpat. Donec non massa non diam volutpat lobortis. Curabitur nec scelerisque leo. Fusce vitae lacus sem."
  },
  {
    id: "j7",
    title: "Full-Stack Developer",
    company: "Google",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula scelerisque nulla, vel dignissim lectus blandit eget. Vestibulum at tellus ex. Curabitur tincidunt metus ut vulputate sodales. Nulla hendrerit, felis at finibus ornare, ex nisi pharetra mi, quis dictum ex libero nec purus. Ut hendrerit purus vitae tortor dignissim, nec dapibus tellus mollis. Curabitur sagittis arcu vel sem ultricies, id egestas orci luctus. Vestibulum non tincidunt tellus. Nunc at augue non diam elementum volutpat. Donec non massa non diam volutpat lobortis. Curabitur nec scelerisque leo. Fusce vitae lacus sem."
  },
  {
    id: "j8",
    title: "Data Scientist",
    company: "Pratt & Whitney",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula scelerisque nulla, vel dignissim lectus blandit eget. Vestibulum at tellus ex. Curabitur tincidunt metus ut vulputate sodales. Nulla hendrerit, felis at finibus ornare, ex nisi pharetra mi, quis dictum ex libero nec purus. Ut hendrerit purus vitae tortor dignissim, nec dapibus tellus mollis. Curabitur sagittis arcu vel sem ultricies, id egestas orci luctus. Vestibulum non tincidunt tellus. Nunc at augue non diam elementum volutpat. Donec non massa non diam volutpat lobortis. Curabitur nec scelerisque leo. Fusce vitae lacus sem."
  },
  {
    id: "j9",
    title: "Front-End Software Developer",
    company: "Spotify",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula scelerisque nulla, vel dignissim lectus blandit eget. Vestibulum at tellus ex. Curabitur tincidunt metus ut vulputate sodales. Nulla hendrerit, felis at finibus ornare, ex nisi pharetra mi, quis dictum ex libero nec purus. Ut hendrerit purus vitae tortor dignissim, nec dapibus tellus mollis. Curabitur sagittis arcu vel sem ultricies, id egestas orci luctus. Vestibulum non tincidunt tellus. Nunc at augue non diam elementum volutpat. Donec non massa non diam volutpat lobortis. Curabitur nec scelerisque leo. Fusce vitae lacus sem."
  },
  {
    id: "j10",
    title: "Back-End Software Developer",
    company: "Meta",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula scelerisque nulla, vel dignissim lectus blandit eget. Vestibulum at tellus ex. Curabitur tincidunt metus ut vulputate sodales. Nulla hendrerit, felis at finibus ornare, ex nisi pharetra mi, quis dictum ex libero nec purus. Ut hendrerit purus vitae tortor dignissim, nec dapibus tellus mollis. Curabitur sagittis arcu vel sem ultricies, id egestas orci luctus. Vestibulum non tincidunt tellus. Nunc at augue non diam elementum volutpat. Donec non massa non diam volutpat lobortis. Curabitur nec scelerisque leo. Fusce vitae lacus sem."
  },
  {
    id: "j11",
    title: "Professor",
    company: "Concordia University",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula scelerisque nulla, vel dignissim lectus blandit eget. Vestibulum at tellus ex. Curabitur tincidunt metus ut vulputate sodales. Nulla hendrerit, felis at finibus ornare, ex nisi pharetra mi, quis dictum ex libero nec purus. Ut hendrerit purus vitae tortor dignissim, nec dapibus tellus mollis. Curabitur sagittis arcu vel sem ultricies, id egestas orci luctus. Vestibulum non tincidunt tellus. Nunc at augue non diam elementum volutpat. Donec non massa non diam volutpat lobortis. Curabitur nec scelerisque leo. Fusce vitae lacus sem."
  },
  {
    id: "j12",
    title: "Fry Cook",
    company: "McDonald's",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula scelerisque nulla, vel dignissim lectus blandit eget. Vestibulum at tellus ex. Curabitur tincidunt metus ut vulputate sodales. Nulla hendrerit, felis at finibus ornare, ex nisi pharetra mi, quis dictum ex libero nec purus. Ut hendrerit purus vitae tortor dignissim, nec dapibus tellus mollis. Curabitur sagittis arcu vel sem ultricies, id egestas orci luctus. Vestibulum non tincidunt tellus. Nunc at augue non diam elementum volutpat. Donec non massa non diam volutpat lobortis. Curabitur nec scelerisque leo. Fusce vitae lacus sem."
  },
  {
    id: "j13",
    title: "Graphic Designer",
    company: "Some Company",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula scelerisque nulla, vel dignissim lectus blandit eget. Vestibulum at tellus ex. Curabitur tincidunt metus ut vulputate sodales. Nulla hendrerit, felis at finibus ornare, ex nisi pharetra mi, quis dictum ex libero nec purus. Ut hendrerit purus vitae tortor dignissim, nec dapibus tellus mollis. Curabitur sagittis arcu vel sem ultricies, id egestas orci luctus. Vestibulum non tincidunt tellus. Nunc at augue non diam elementum volutpat. Donec non massa non diam volutpat lobortis. Curabitur nec scelerisque leo. Fusce vitae lacus sem."
  },
  {
    id: "j14",
    title: "Bitcoin Investor",
    company: "Wall Street",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula scelerisque nulla, vel dignissim lectus blandit eget. Vestibulum at tellus ex. Curabitur tincidunt metus ut vulputate sodales. Nulla hendrerit, felis at finibus ornare, ex nisi pharetra mi, quis dictum ex libero nec purus. Ut hendrerit purus vitae tortor dignissim, nec dapibus tellus mollis. Curabitur sagittis arcu vel sem ultricies, id egestas orci luctus. Vestibulum non tincidunt tellus. Nunc at augue non diam elementum volutpat. Donec non massa non diam volutpat lobortis. Curabitur nec scelerisque leo. Fusce vitae lacus sem."
  },
  {
    id: "j15",
    title: "Full-Stack Developer",
    company: "Google",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula scelerisque nulla, vel dignissim lectus blandit eget. Vestibulum at tellus ex. Curabitur tincidunt metus ut vulputate sodales. Nulla hendrerit, felis at finibus ornare, ex nisi pharetra mi, quis dictum ex libero nec purus. Ut hendrerit purus vitae tortor dignissim, nec dapibus tellus mollis. Curabitur sagittis arcu vel sem ultricies, id egestas orci luctus. Vestibulum non tincidunt tellus. Nunc at augue non diam elementum volutpat. Donec non massa non diam volutpat lobortis. Curabitur nec scelerisque leo. Fusce vitae lacus sem."
  },
  {
    id: "j16",
    title: "Data Scientist",
    company: "Pratt & Whitney",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula scelerisque nulla, vel dignissim lectus blandit eget. Vestibulum at tellus ex. Curabitur tincidunt metus ut vulputate sodales. Nulla hendrerit, felis at finibus ornare, ex nisi pharetra mi, quis dictum ex libero nec purus. Ut hendrerit purus vitae tortor dignissim, nec dapibus tellus mollis. Curabitur sagittis arcu vel sem ultricies, id egestas orci luctus. Vestibulum non tincidunt tellus. Nunc at augue non diam elementum volutpat. Donec non massa non diam volutpat lobortis. Curabitur nec scelerisque leo. Fusce vitae lacus sem."
  },
];

export function myJobs() {
  return jobs;
}

export function findJob(id) {
  return jobs.filter((job) => Object.values(job).indexOf(id) > -1)[0];
}
