document.addEventListener('DOMContentLoaded', () => {
    // UI Elements
    const categorySelect = document.getElementById('category');
    const recipientInput = document.getElementById('recipientName');
    const messageInput = document.getElementById('cardMessage');
    const fontBtns = document.querySelectorAll('.font-btn');
    const cardElement = document.getElementById('greetingCard');
    const toggleContrast = document.getElementById('toggleContrast');
    
    const previewCategory = document.getElementById('previewCategory');
    const previewMessage = document.getElementById('previewMessage');
    const previewRecipient = document.getElementById('previewRecipient');
    
    const shareBtn = document.getElementById('shareBtn');
    const shareModal = document.getElementById('shareModal');
    const closeModal = document.querySelector('.close-modal');
    const copyBtn = document.getElementById('copyBtn');
    const shareLink = document.getElementById('shareLink');

    // Update Preview
    const updatePreview = () => {
        const cat = categorySelect.value;
        previewCategory.innerText = cat.toUpperCase().replace('-', ' ');
        previewRecipient.innerText = recipientInput.value ? `To: ${recipientInput.value}` : 'To: Someone Special';
        previewMessage.innerText = messageInput.value || 'Your personalized message will appear here. Start typing to see the magic happen!';
        
        // Theme class
        cardElement.className = `card ${cat}-theme`;
    };

    categorySelect.addEventListener('change', updatePreview);
    recipientInput.addEventListener('input', updatePreview);
    messageInput.addEventListener('input', updatePreview);

    // Font Selection
    fontBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            fontBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            cardElement.style.fontFamily = btn.dataset.font;
        });
    });

    // Theme Toggle (Dark/Light Mode)
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        toggleContrast.innerText = '☀️';
    }

    toggleContrast.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        toggleContrast.innerText = isDark ? '☀️' : '🌓';
    });

    // Share Logic
    shareBtn.addEventListener('click', () => {
        // In a real app, you'd send data to a DB and get a unique ID
        const fakeId = Math.random().toString(36).substring(7);
        shareLink.value = `${window.location.origin}/view.html?id=${fakeId}`;
        shareModal.classList.remove('hidden');
    });

    closeModal.addEventListener('click', () => {
        shareModal.classList.add('hidden');
    });

    copyBtn.addEventListener('click', () => {
        shareLink.select();
        document.execCommand('copy');
        copyBtn.innerText = 'Copied!';
        setTimeout(() => copyBtn.innerText = 'Copy', 2000);
    });

    // Initialize
    updatePreview();
});
