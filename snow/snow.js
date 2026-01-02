// Enhanced Snow Effect
function createSnowEffect(intensity = 50) {
    let snowContainer = document.getElementById('snow-container');

    // Create container if it doesn't exist
    if (!snowContainer) {
        snowContainer = document.createElement('div');
        snowContainer.id = 'snow-container';
        document.body.prepend(snowContainer);
    }

    // Clear existing snow to handle intensity updates
    snowContainer.innerHTML = '';

    // Calculate flake count based on intensity (0-100). Max 600 flakes.
    // 50 -> 300 flakes
    const SNOWFLAKE_COUNT = Math.floor((intensity / 100) * 600);

    if (SNOWFLAKE_COUNT <= 0) return;

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < SNOWFLAKE_COUNT; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');

        // Randomize size
        const size = Math.random() * 5 + 2; // 2px to 7px
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;

        // Randomize opacity
        const opacity = Math.random() * 0.7 + 0.3;
        snowflake.style.opacity = opacity;

        // Randomize blur
        const blur = Math.random() * 3;
        snowflake.style.filter = `blur(${blur}px)`;

        // Randomize vibration speed and drift
        const duration = Math.random() * 10 + 10; // 10s to 20s fall
        const delay = Math.random() * -20; // Start immediately scattered
        const driftStart = Math.random() * 20 - 10 + 'vw';
        const driftEnd = Math.random() * 20 - 10 + 'vw';

        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animation = `fall ${duration}s linear ${delay}s infinite`;
        snowflake.style.setProperty('--drift-x-start', driftStart);
        snowflake.style.setProperty('--drift-x-end', driftEnd);

        fragment.appendChild(snowflake);
    }

    snowContainer.appendChild(fragment);
}

// Window resize handler to reset if needed (optional, keeping it simple)
window.addEventListener('resize', () => {
    // maybe refresh snow on big resize?
});
