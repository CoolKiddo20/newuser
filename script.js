async function fetchUser() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const user = data.results[0];
        displayUser(user);
    } catch (error) {
        console.error('Error fetching user:', error);
    }
}

function displayUser(user) {
    document.getElementById('userAvatar').src = user.picture.large;
    document.getElementById('userName').textContent = `Name:${user.name.first} ${user.name.last}`;
    document.getElementById('userEmail').textContent = `Email:${user.email}`;
    document.getElementById('userGender').textContent = `Gender:${user.gender}`;
}

document.getElementById('newUser').addEventListener('click', fetchUser);

fetchUser();
