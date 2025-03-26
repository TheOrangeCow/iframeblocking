if (window.top !== window.self) {
    async function isWebsiteAllowed() {
        try {
            const response = await fetch('https://778.house-778.org/dev/list.json');
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
            document.body.innerHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Access Denied</title>
    <style>
        body {
            background-color: #1a1a1a;
            color: #fff;
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
        }

        h1 {
            font-size: 3rem;
            margin-bottom: 10px;
            animation: fadeIn 1s ease-in-out;
        }

        p {
            font-size: 1.5rem;
            opacity: 0.8;
            animation: fadeIn 1.5s ease-in-out;
        }

        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }

        .emoji {
            font-size: 5rem;
            animation: bounce 1.5s infinite;
        }

        .link{
            color: #fff;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="emoji">🚫</div>
        <h1>Access Denied</h1>
        <p>Oops! It looks like you don't have permission to be here.<br>Go to <a class ="link" href="https://778.house-778.org/dev/">house-778</a> to get a API key.</p>
    </div>
</body>
</html>`;
        }
    });
}












/*async function isWebsiteAllowed() {
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
});*/



/*if (window.top !== window.self) {
  
  document.body.innerHTML = "<h1>go away</h1>";
}*/
