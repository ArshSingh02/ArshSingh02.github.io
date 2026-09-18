const projects = [
    {
        date: "JULY 2026",
        title: "Reinforcement Learning Search and Rescue Robot",
        tags: ["C++", "Python", "ROS 2", "Isaac ROS", "Reinforcement Learning", "Computer Vision"],
        description: "Developed an autonomous mobile robot using Isaac ROS and reinforcement learning for efficient autonomous object search in indoor environments.",
        href: "projects/robot.html"
    },
    {
        date: "MAY 2025",
        title: "Embedded ECG & Temperature Monitor",
        tags: ["C", "Zephyr RTOS", "Embedded Systems", "Bluetooth Low Energy", "ADC/PWM/GPIO", "Multithreading"],
        description: "Developed an embedded physiological monitoring system for real-time ECG acquisition, heart-rate computation, temperature sensing, battery monitoring, and wireless BLE communication.",
        href: "projects/embedded.html",
        image: {
            src: "projects/images/embedded/heart_rate_validation.png",
            alt: "Heart rate validation results for the embedded ECG and temperature monitor"
        }
    },
    {
        date: "APRIL 2024",
        title: "VVI Pacemaker",
        tags: ["C/C++", "Embedded Systems", "Analog Circuit Design", "Signal Processing", "ADC", "ECG Acquisition"],
        description: "Designed and built a VVI pacemaker with custom analog sensing and stimulation circuitry to detect ventricular activity and deliver pacing when intrinsic heart rate fell below a programmed threshold.",
        href: "projects/pacemaker.html",
        image: {
            src: "projects/images/pacemaker/pacemaker-stimulation-output.png",
            alt: "Stimulation output waveform for the VVI pacemaker"
        }
    }
];

const experiences = [
    {
        date: "MAY 2026 \u2013 AUGUST 2026 | PITTSBURGH, PA",
        title: "Neuromechatronics Lab",
        tags: ["Machine Learning Research Assistant", "Deep Learning", "Signal Processing", "Prosthetics"],
        description: "Developed multi-task deep learning methods for decoding hand gestures and continuous grip force from 256-channel high-density EMG signals.",
        href: "experience/nml.html"
    },
    {
        date: "JANUARY 2023 \u2013 MAY 2026 | DURHAM, NC",
        title: "Brain Stimulation Engineering Lab",
        tags: ["Neural Research Engineer", "Computational Neuroscience", "Biophysical Modeling", "Image Processing", "Machine Learning", "High-Performance Computing"],
        description: "Developed computational modeling pipelines to study white-matter axon responses to non-invasive brain stimulation therapies, including Transcranial Magnetic Stimulation and Electroconvulsive Therapy. Integrated high-performance computing and machine learning to accelerate large-scale neural simulations, analysis, and visualization.",
        href: "experience/bsel.html",
        links: [
            "Publication: In Progress",
            "Code Repository: GitHub"
        ]
    },
    {
        date: "MAY 2023 \u2013 AUGUST 2023 | SEATTLE, WA",
        title: "Center for Neurotechnology \u2013 University of Washington",
        tags: ["Machine Learning Intern", "Signal Processing", "Machine Learning", "Neurotechnology"],
        description: "Investigated neural signatures of consciousness during anesthesia induction and emergence to support improved monitoring of patient state. Developed machine learning and signal-processing methods to classify stages of consciousness from intracranial EEG recordings.",
        href: "experience/cnt-uw.html"
    }
];

function createCard(item) {
    const card = document.createElement("a");
    card.className = "project-card";
    card.href = item.href;
    card.setAttribute("aria-label", `${item.title} details`);

    const media = document.createElement("span");
    media.className = "project-card-media";

    if (item.image) {
        media.classList.add("project-card-media-image");

        const image = document.createElement("img");
        image.src = item.image.src;
        image.alt = item.image.alt;
        image.loading = "lazy";

        media.appendChild(image);
    } else {
        media.setAttribute("aria-hidden", "true");

        const icon = document.createElement("span");
        icon.className = "project-placeholder-icon";
        media.appendChild(icon);
    }

    const body = document.createElement("span");
    body.className = "project-card-body";

    const date = document.createElement("span");
    date.className = "project-card-date";
    date.textContent = item.date;

    const title = document.createElement("span");
    title.className = "project-card-title";
    title.textContent = item.title;

    const tags = document.createElement("span");
    tags.className = "project-card-tags";
    tags.textContent = item.tags.join(" \u2022 ");

    const description = document.createElement("span");
    description.className = "project-card-description";
    description.textContent = item.description;

    body.append(date, title, tags, description);

    if (item.links) {
        const links = document.createElement("span");
        links.className = "project-card-links";
        links.textContent = item.links.join(" \u2022 ");
        body.appendChild(links);
    }

    const arrow = document.createElement("span");
    arrow.className = "project-card-arrow";
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = "\u2192";

    card.append(media, body, arrow);

    return card;
}

const projectList = document.getElementById("project-card-list");
const experienceList = document.getElementById("experience-card-list");

if (projectList) {
    projects.forEach((project) => {
        projectList.appendChild(createCard(project));
    });
}

if (experienceList) {
    experiences.forEach((experience) => {
        experienceList.appendChild(createCard(experience));
    });
}
