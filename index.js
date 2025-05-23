const memberG = document.getElementById('member-g');
const memberA = document.getElementById('member-a');
const memberJ = document.getElementById('member-j');
const memberI = document.getElementById('member-i');

const image = document.getElementById('image');
const info = document.getElementById('info');

const pictures = [' url(./images/genev.jpg)', ' url(./images/abdul.jpg)', ' url(./images/naak.jpg)', ' url(./images/newike.webp)'];

const memberInfo = ['Genevieve Appiah', 'Abdul Gafar', 'Jerusha Quarcoo', 'Isaac Forson'];
let index = 1;

memberG.addEventListener('click', function () {
    memberG.style.backgroundColor = 'white';
    memberG.style.color = 'red';
    memberG.style.fontWeight = 'bold';

    memberA.style.backgroundColor = 'transparent';
    memberA.style.color = 'rgb(150, 146, 146)';
    memberA.style.fontWeight = '100';
    memberJ.style.backgroundColor = 'transparent';
    memberJ.style.color = 'rgb(150, 146, 146)';
    memberJ.style.fontWeight = '100';
    memberI.style.backgroundColor = 'transparent';
    memberI.style.color = 'rgb(150, 146, 146)';
    memberI.style.fontWeight = '100';

    // index = 0;

});

memberA.addEventListener('click', function () {
    memberA.style.backgroundColor = 'white';
    memberA.style.color = 'red';
    memberA.style.fontWeight = 'bold';

    memberG.style.backgroundColor = 'transparent';
    memberG.style.color = 'rgb(150, 146, 146)';
    memberG.style.fontWeight = '100';
    memberJ.style.backgroundColor = 'transparent';
    memberJ.style.color = 'rgb(150, 146, 146)';
    memberJ.style.fontWeight = '100';
    memberI.style.backgroundColor = 'transparent';
    memberI.style.color = 'rgb(150, 146, 146)';
    memberI.style.fontWeight = '100';

    // index = 1;
});

memberJ.addEventListener('click', function () {
    memberJ.style.backgroundColor = 'white';
    memberJ.style.color = 'red';
    memberJ.style.fontWeight = 'bold';

    memberA.style.backgroundColor = 'transparent';
    memberA.style.color = 'rgb(150, 146, 146)';
    memberA.style.fontWeight = '100';
    memberG.style.backgroundColor = 'transparent';
    memberG.style.color = 'rgb(150, 146, 146)';
    memberG.style.fontWeight = '100';
    memberI.style.backgroundColor = 'transparent';
    memberI.style.color = 'rgb(150, 146, 146)';
    memberI.style.fontWeight = '100';

    // index = 2;
});

memberI.addEventListener('click', function () {
    memberI.style.backgroundColor = 'white';
    memberI.style.color = 'red';
    memberI.style.fontWeight = 'bold';

    memberA.style.backgroundColor = 'transparent';
    memberA.style.color = 'rgb(150, 146, 146)';
    memberA.style.fontWeight = '100';
    memberJ.style.backgroundColor = 'transparent';
    memberJ.style.color = 'rgb(150, 146, 146)';
    memberJ.style.fontWeight = '100';
    memberG.style.backgroundColor = 'transparent';
    memberG.style.color = 'rgb(150, 146, 146)';
    memberG.style.fontWeight = '100';

    // index = 3;
});



setInterval(function () {
    if (index == 0) {
        image.style.backgroundImage = pictures[index];
        info.innerText = memberInfo[index];

        memberG.style.backgroundColor = 'white';
        memberG.style.color = 'red';
        memberG.style.fontWeight = 'bold';

        memberA.style.backgroundColor = 'transparent';
        memberA.style.color = 'rgb(150, 146, 146)';
        memberA.style.fontWeight = '100';
        memberJ.style.backgroundColor = 'transparent';
        memberJ.style.color = 'rgb(150, 146, 146)';
        memberJ.style.fontWeight = '100';
        memberI.style.backgroundColor = 'transparent';
        memberI.style.color = 'rgb(150, 146, 146)';
        memberI.style.fontWeight = '100';
    }
    else if (index == 1) {
        image.style.backgroundImage = pictures[index];
        info.innerText = memberInfo[index];

        memberA.style.backgroundColor = 'white';
        memberA.style.color = 'red';
        memberA.style.fontWeight = 'bold';

        memberG.style.backgroundColor = 'transparent';
        memberG.style.color = 'rgb(150, 146, 146)';
        memberG.style.fontWeight = '100';
        memberJ.style.backgroundColor = 'transparent';
        memberJ.style.color = 'rgb(150, 146, 146)';
        memberJ.style.fontWeight = '100';
        memberI.style.backgroundColor = 'transparent';
        memberI.style.color = 'rgb(150, 146, 146)';
        memberI.style.fontWeight = '100';
    }
    else if (index == 2) {
        image.style.backgroundImage = pictures[index];
        info.innerText = memberInfo[index];

        memberJ.style.backgroundColor = 'white';
        memberJ.style.color = 'red';
        memberJ.style.fontWeight = 'bold';

        memberA.style.backgroundColor = 'transparent';
        memberA.style.color = 'rgb(150, 146, 146)';
        memberA.style.fontWeight = '100';
        memberG.style.backgroundColor = 'transparent';
        memberG.style.color = 'rgb(150, 146, 146)';
        memberG.style.fontWeight = '100';
        memberI.style.backgroundColor = 'transparent';
        memberI.style.color = 'rgb(150, 146, 146)';
        memberI.style.fontWeight = '100';
    }
    else if (index == 3){
        image.style.backgroundImage = pictures[index];
        info.innerText = memberInfo[index];

        memberI.style.backgroundColor = 'white';
        memberI.style.color = 'red';
        memberI.style.fontWeight = 'bold';

        memberA.style.backgroundColor = 'transparent';
        memberA.style.color = 'rgb(150, 146, 146)';
        memberA.style.fontWeight = '100';
        memberJ.style.backgroundColor = 'transparent';
        memberJ.style.color = 'rgb(150, 146, 146)';
        memberJ.style.fontWeight = '100';
        memberG.style.backgroundColor = 'transparent';
        memberG.style.color = 'rgb(150, 146, 146)';
        memberG.style.fontWeight = '100';
    }
    else {
        index = 0;
    }

    index = index + 1;
    
    // if (index == 4) {
    //     index = 0;
    // }
}, 4000);
