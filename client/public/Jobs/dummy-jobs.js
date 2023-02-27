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
      "Duis vel blandit diam. Maecenas sapien nulla, scelerisque vitae mollis et, luctus at nulla. Sed quis magna at libero dignissim vehicula. Sed eu tristique ante. Curabitur egestas lectus ut dolor fermentum malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin convallis mollis leo sed rhoncus. Morbi consectetur ante et magna luctus finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec et nibh odio. Morbi felis lectus, blandit quis eros ut, sagittis volutpat sapien. Donec nec augue porttitor, imperdiet elit vel, interdum nunc. Vestibulum sagittis sem at mauris aliquam aliquet. Phasellus quis pulvinar ligula. Integer eget lectus pretium, eleifend felis eu, tempus sapien. Suspendisse potenti.",
  },
  {
    id: "j3",
    title: "Professor",
    company: "Concordia University",
    description:
      "Phasellus leo turpis, mattis eget hendrerit quis, ultricies a est. Phasellus vitae posuere felis. Donec at venenatis enim. Etiam euismod, felis sed pretium pellentesque, neque nibh luctus ligula, a varius urna augue nec lacus. Nulla blandit tortor neque, at laoreet nunc tempor vel. Nulla id ipsum ligula. Nulla facilisi. Quisque euismod, purus sit amet interdum accumsan, lorem diam fermentum risus, sed porttitor lectus nunc sed diam. Nullam vulputate nulla quam, ac consequat nibh ultricies nec.",
  },
  {
    id: "j4",
    title: "Fry Cook",
    company: "McDonald's",
    description:
      "Donec eu scelerisque nisi, vulputate porta turpis. Donec mattis id lorem at interdum. Phasellus nec libero semper, accumsan quam id, placerat turpis. Proin vitae sodales tortor, non auctor dolor. Vestibulum volutpat leo id dui fringilla gravida. Suspendisse tristique tortor id imperdiet efficitur. Fusce quis lectus in risus pulvinar faucibus. Quisque nec tincidunt neque. Aenean dictum, nulla ac egestas venenatis, ante odio hendrerit quam, vel interdum lectus ipsum id orci. Nunc ligula ex, ornare sit amet leo et, suscipit laoreet odio. Pellentesque sit amet hendrerit ante. Nulla eget nunc risus. Cras sit amet diam in sem auctor pharetra."
  },
  {
    id: "j5",
    title: "Graphic Designer",
    company: "Some Company",
    description:
      "Cras feugiat turpis sed sodales pellentesque. Nam nibh sapien, tempor eget venenatis a, viverra non dolor. Vestibulum malesuada nisl eu lacus fermentum, sed ullamcorper quam vehicula. Proin lacinia molestie urna, in commodo nunc efficitur tempus. Donec tristique lacinia placerat. Nam dignissim pellentesque orci in euismod. Nam nec libero a lectus pulvinar vestibulum nec eget nibh. Etiam felis purus, vulputate eu placerat et, convallis eget quam. Cras in lobortis augue, non semper velit. Maecenas pellentesque commodo mollis. Curabitur porttitor iaculis metus. Maecenas imperdiet nec felis at bibendum. Etiam eget sem vel massa eleifend tempus a nec enim. Morbi feugiat vel ipsum at aliquet."
  },
  {
    id: "j6",
    title: "Bitcoin Investor",
    company: "Wall Street",
    description:
      "Mauris dapibus enim eget nulla pellentesque, sagittis pulvinar leo lacinia. Fusce tincidunt nisl massa, ac egestas nulla ornare sit amet. Nunc rhoncus auctor urna, eget vehicula ex venenatis ac. Aliquam vitae consequat metus, quis pretium orci. Nullam et metus sed tortor facilisis malesuada. Sed molestie lectus eu varius tristique. Pellentesque odio nulla, eleifend nec sodales ac, condimentum at metus. Morbi ut tellus consectetur, sollicitudin diam vel, tincidunt magna. Nulla vulputate, tortor sed varius molestie, magna dolor rutrum neque, eu blandit odio eros ut justo. Duis malesuada, dui nec porta gravida, ex erat tempus tellus, id interdum urna risus non neque."
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
