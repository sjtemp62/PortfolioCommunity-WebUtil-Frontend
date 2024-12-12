document.getElementById('addPortfolioButton').addEventListener('click', function() {
    openModal();
});

document.getElementById('editPortfolioButton').addEventListener('click', function() {
    const selectedPortfolio = document.querySelector('.portfolio-item input[type="checkbox"]:checked').closest('.portfolio-item');
    const title = selectedPortfolio.querySelector('h3').textContent;
    const description = selectedPortfolio.querySelector('p').textContent;
    const github = selectedPortfolio.querySelector('a').href;
    const imageUrl = selectedPortfolio.querySelector('img').src;
    editPortfolioItem(selectedPortfolio, title, description, imageUrl, github);
});

document.getElementById('deletePortfolioButton').addEventListener('click', function() {
    const selectedPortfolio = document.querySelector('.portfolio-item input[type="checkbox"]:checked').closest('.portfolio-item');
    document.getElementById('portfolioList').removeChild(selectedPortfolio);
    toggleActionButtons(false);
});

document.querySelector('.close').addEventListener('click', function() {
    closeModal();
});

window.addEventListener('click', function(event) {
    const modal = document.getElementById('portfolioModal');
    if (event.target === modal) {
        closeModal();
    }
});

document.getElementById('portfolioForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').files[0];
    const github = document.getElementById('github').value;

    const reader = new FileReader();
    reader.onload = function(e) {
        addPortfolioItem(title, description, e.target.result, github);
        closeModal();
    };
    reader.readAsDataURL(image);
});

function openModal() {
    document.getElementById('portfolioModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('portfolioModal').style.display = 'none';
    document.getElementById('portfolioForm').reset();
}

function addPortfolioItem(title, description, imageUrl, github) {
    const portfolioList = document.getElementById('portfolioList');
    const portfolioItem = document.createElement('div');
    portfolioItem.className = 'portfolio-item';

    portfolioItem.innerHTML = `
        <input type="checkbox">
        <div class="portcontent">
            <h3>제목 : ${title}</h3>
            <p>포트폴리오 내용 : ${description}</p>
            <img src="${imageUrl}" alt="${title}" class="portfolioImage">
            <p><img src="images/github-mark.svg" src="github-mark.svg" width="30px"><a href="${github}" target="_blank">GitHub</a></p>
        </div>
    `;

    portfolioItem.querySelector('input[type="checkbox"]').addEventListener('change', function() {
        const isChecked = this.checked;
        toggleActionButtons(isChecked);
    });

    portfolioList.appendChild(portfolioItem);
}

function editPortfolioItem(portfolioItem, title, description, imageUrl, github) {
    openModal();
    document.getElementById('title').value = title;
    document.getElementById('description').value = description;
    document.getElementById('github').value = github;

    document.getElementById('portfolioForm').onsubmit = function(event) {
        event.preventDefault();
        portfolioItem.querySelector('h3').textContent = document.getElementById('title').value;
        portfolioItem.querySelector('p').textContent = document.getElementById('description').value;
        portfolioItem.querySelector('a').href = document.getElementById('github').value;

        const image = document.getElementById('image').files[0];
        if (image) {
            const reader = new FileReader();
            reader.onload = function(e) {
                portfolioItem.querySelector('img').src = e.target.result;
            };
            reader.readAsDataURL(image);
        }

        closeModal();
        document.getElementById('portfolioForm').onsubmit = addPortfolioItem;
    };
}

function toggleActionButtons(enable) {
    document.getElementById('editPortfolioButton').disabled = !enable;
    document.getElementById('deletePortfolioButton').disabled = !enable;
}
