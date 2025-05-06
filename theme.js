tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#3B82F6', // blue-500
                    dark: '#60A5FA'    // blue-400
                }
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Get saved theme from localStorage or default to system
    const savedTheme = localStorage.getItem('takashikumagai-github-theme') || 'system';
    updateTheme(savedTheme);
    
    document.getElementById('theme-selector').value = savedTheme;
});

function updateTheme(mode) {
    localStorage.setItem('takashikumagai-github-theme', mode);
    
    if (mode === 'dark') {
        document.documentElement.classList.add('dark');
    } else if (mode === 'light') {
        document.documentElement.classList.remove('dark');
    } else {
        // System preference
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }
}
