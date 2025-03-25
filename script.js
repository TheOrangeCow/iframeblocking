if (window.top !== window.self) {
    async function isWebsiteAllowed() {
        try {
            const response = await fetch('https://778.house-778.org/dev/list.php');
            if (!response.ok) {
                throw new Error('Failed to fetch JSON');
            }
            const data = await response.json();
            
            
            const topWebsite = new URL(document.referrer).hostname;
            
            
            return data.allowedWebsites.includes(topWebsite);
        } catch (error) {
            console.error('Error:', error);
            return false;
        }
    }

    isWebsiteAllowed().then(isAllowed => {
        console.log('Is website allowed:', isAllowed);
        if (!isAllowed) {
            document.body.innerHTML = "<h1>go away</h1>";
        }
    });
}


/*if (window.top !== window.self) {
  
  document.body.innerHTML = "<h1>go away</h1>";
}*/
