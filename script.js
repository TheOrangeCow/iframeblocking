async function isWebsiteAllowed() {
    try {
        const response = await fetch('https://778.house-778.org/dev/list.php');
        if (!response.ok) {
            throw new Error('Failed to fetch JSON');
        }
        const data = await response.json();

        // Get the referring website if inside an iframe
        let currentWebsite;
        if (window.top !== window.self) {
            currentWebsite = new URL(document.referrer).hostname;  // Get the parent frame's hostname
        } else {
            currentWebsite = window.location.hostname;  // Get the current site's hostname
        }

        console.log("Checking website:", currentWebsite);
        console.log("Allowed list:", data.allowedWebsites);

        // Check if the website is in the allowed list
        return data.allowedWebsites.includes(currentWebsite);
    } catch (error) {
        console.error('Error:', error);
        return false;
    }
}

// Example usage
isWebsiteAllowed().then(isAllowed => {
    console.log('Is website allowed:', isAllowed);
    if (!isAllowed) {
        document.body.innerHTML = "<h1>go away</h1>";
    }
});



/*if (window.top !== window.self) {
  
  document.body.innerHTML = "<h1>go away</h1>";
}*/
