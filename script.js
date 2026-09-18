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
        href: "projects/embedded.html"
    },
    {
        date: "APRIL 2024",
        title: "VVI Pacemaker",
        tags: ["C/C++", "Embedded Systems", "Analog Circuit Design", "Signal Processing", "ADC", "ECG Acquisition"],
        description: "Designed and built a VVI pacemaker with custom analog sensing and stimulation circuitry to detect ventricular activity and deliver pacing when intrinsic heart rate fell below a programmed threshold.",
        href: "projects/pacemaker.html"
    }
];

function createProjectCard(project) {
    const card = document.createElement("a");
    card.className = "project-card";
    card.href = project.href;
    card.setAttribute("aria-label", `${project.title} project details`);

    const media = document.createElement("span");
    media.className = "project-card-media";
    media.setAttribute("aria-hidden", "true");

    const icon = document.createElement("span");
    icon.className = "project-placeholder-icon";
    media.appendChild(icon);

    const body = document.createElement("span");
    body.className = "project-card-body";

    const date = document.createElement("span");
    date.className = "project-card-date";
    date.textContent = project.date;

    const title = document.createElement("span");
    title.className = "project-card-title";
    title.textContent = project.title;

    const tags = document.createElement("span");
    tags.className = "project-card-tags";
    tags.textContent = project.tags.join(" \u2022 ");

    const description = document.createElement("span");
    description.className = "project-card-description";
    description.textContent = project.description;

    body.append(date, title, tags, description);

    const arrow = document.createElement("span");
    arrow.className = "project-card-arrow";
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = "\u2192";

    card.append(media, body, arrow);

    return card;
}

const projectList = document.getElementById("project-card-list");

if (projectList) {
    projects.forEach((project) => {
        projectList.appendChild(createProjectCard(project));
    });
}
