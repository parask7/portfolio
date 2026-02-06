document.querySelectorAll('img').forEach(img => {
    // 1. Create a wrapper and a shield
    const wrapper = document.createElement('div');
    const shield = document.createElement('div');

    // 2. Style the wrapper to fit the image
    wrapper.style.position = 'relative';
    wrapper.style.display = img.style.display === 'block' ? 'block' : 'inline-block';
    wrapper.style.width = 'fit-content';

    // 3. Style the shield to cover the image
    shield.style.position = 'absolute';
    shield.style.top = '0';
    shield.style.left = '0';
    shield.style.width = '100%';
    shield.style.height = '100%';
    shield.style.zIndex = '10';

    // 4. Disable right-click and dragging on the shield
    shield.addEventListener('contextmenu', e => e.preventDefault());
    shield.addEventListener('dragstart', e => e.preventDefault());

    // 5. Insert the wrapper before the image, then move the image and shield inside
    img.parentNode.insertBefore(wrapper, img);
    wrapper.appendChild(img);
    wrapper.appendChild(shield);
});