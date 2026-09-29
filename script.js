const projects = [
    {
        date: "JULY 2026",
        title: "Reinforcement Learning Search and Rescue Robot",
        tags: [
            "C++",
            "Python",
            "ROS 2",
            "Isaac ROS",
            "Reinforcement Learning",
            "Computer Vision"
        ],
        description: "Developed an autonomous mobile robot using Isaac ROS and reinforcement learning for efficient autonomous object search in indoor environments."
    },
    {
        date: "MAY 2025",
        title: "Embedded ECG & Temperature Monitor",
        tags: [
            "C",
            "Zephyr RTOS",
            "Embedded Systems",
            "Bluetooth Low Energy",
            "ADC/PWM/GPIO",
            "Multithreading"
        ],
        description: "Developed an embedded physiological monitoring system for real-time ECG acquisition, heart-rate computation, temperature sensing, battery monitoring, and wireless BLE communication.",
        image: {
            src: "projects/images/embedded/heart_rate_validation.png",
            alt: "Heart rate validation results for the embedded ECG and temperature monitor"
        }
    },
    {
        date: "APRIL 2024",
        title: "VVI Pacemaker",
        tags: [
            "C/C++",
            "Embedded Systems",
            "Analog Circuit Design",
            "Signal Processing",
            "ADC",
            "ECG Acquisition"
        ],
        description: "Designed and built a VVI pacemaker with custom analog sensing and stimulation circuitry to detect ventricular activity and deliver pacing when intrinsic heart rate fell below a programmed threshold.",
        image: {
            src: "projects/images/pacemaker/pacemaker-stimulation-output.png",
            alt: "Stimulation output waveform for the VVI pacemaker"
        }
    }
];

const experiences = [
    {
        role: "Graduate Research Assistant",
        date: "MAY 2026 – AUGUST 2026 | PITTSBURGH, PA",
        title: "Neuromechatronics Lab",
        tags: [
            "Deep Learning",
            "Signal Processing",
            "Prosthetics"
        ],
        description: "Developed multi-task deep learning methods for decoding hand gestures and continuous grip force from 256-channel high-density EMG signals."
    },
    {
        role: "Neural Research Engineer",
        date: "JANUARY 2023 – MAY 2026 | DURHAM, NC",
        title: "Brain Stimulation Engineering Lab",
        tags: [
            "Computational Neuroscience",
            "Biophysical Modeling",
            "Image Processing",
            "Machine Learning",
            "High-Performance Computing"
        ],
        description: "Developed computational modeling pipelines to study white-matter axon responses to non-invasive brain stimulation therapies. Integrated high-performance computing and machine learning to accelerate large-scale neural simulations.",
        links: [
            "Publication: In Progress",
            "Code Repository: GitHub"
        ]
    },
    {
        role: "Machine Learning Intern",
        date: "MAY 2023 – AUGUST 2023 | SEATTLE, WA",
        title: "Center for Neurotechnology – University of Washington",
        tags: [
            "Machine Learning",
            "Signal Processing",
            "Neurotechnology"
        ],
        description: "Investigated neural signatures of consciousness during anesthesia induction and emergence to support improved monitoring of patient state. Developed machine learning and signal-processing methods to classify stages of consciousness from intracranial EEG recordings."
    }
];

function createCard(item) {
    const card = document.createElement("div");
    card.className = "project-card";

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

    let header = null;

    if (item.role) {
        header = document.createElement("span");
        header.className = "experience-header";

        const role = document.createElement("span");
        role.className = "experience-role";
        role.textContent = item.role;

        const date = document.createElement("span");
        date.className = "project-card-date experience-date";
        date.textContent = item.date;

        header.append(
            role,
            date
        );
    } else {
        header = document.createElement("span");
        header.className = "project-card-date";
        header.textContent = item.date;
    }

    const title = document.createElement("span");
    title.className = "project-card-title";
    title.textContent = item.title;

    const tags = document.createElement("span");
    tags.className = "project-card-tags";
    tags.textContent = item.tags.join(" • ");

    const description = document.createElement("span");
    description.className = "project-card-description";
    description.textContent = item.description;

    body.append(
        header,
        title,
        tags,
        description
    );

    if (item.links) {
        const links = document.createElement("span");
        links.className = "project-card-links";
        links.textContent = item.links.join(" • ");

        body.appendChild(links);
    }

    card.append(
        media,
        body
    );

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

function initAboutProfileFollow() {
    const aboutContainer = document.querySelector(".about-container");
    const profileCard = document.querySelector(".profile-column");

    if (!aboutContainer || !profileCard) {
        return;
    }

    const desktopQuery = window.matchMedia("(min-width: 901px)");
    const topOffset = 32;

    let currentOffset = 0;
    let targetOffset = 0;
    let animationFrame = null;

    function clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }

    function measureTarget() {
        if (!desktopQuery.matches) {
            targetOffset = 0;
            currentOffset = 0;
            profileCard.style.transform = "";
            return;
        }

        const containerTop =
            aboutContainer.getBoundingClientRect().top + window.scrollY;

        const maxOffset = Math.max(
            0,
            aboutContainer.offsetHeight - profileCard.offsetHeight
        );

        targetOffset = clamp(
            window.scrollY + topOffset - containerTop,
            0,
            maxOffset
        );
    }

    function animate() {
        currentOffset +=
            (targetOffset - currentOffset) * 0.16;

        if (Math.abs(targetOffset - currentOffset) < 0.35) {
            currentOffset = targetOffset;
        }

        profileCard.style.transform = currentOffset
            ? `translate3d(0, ${currentOffset}px, 0)`
            : "";

        if (currentOffset !== targetOffset) {
            animationFrame =
                window.requestAnimationFrame(animate);
        } else {
            animationFrame = null;
        }
    }

    function update() {
        measureTarget();

        if (!animationFrame) {
            animationFrame =
                window.requestAnimationFrame(animate);
        }
    }

    window.addEventListener(
        "scroll",
        update,
        { passive: true }
    );

    window.addEventListener(
        "resize",
        update
    );

    desktopQuery.addEventListener(
        "change",
        update
    );

    update();
}

initAboutProfileFollow();