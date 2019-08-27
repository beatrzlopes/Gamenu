function isReferredNotFromMe() {
    try {
        const referrer = new URL(document.referrer);
        return !(referrer.origin === location.origin);
    } catch(invalid_url_error) {
        return false;
    }
}

let alreadyActivatedModal = false;

function setModalViewd(){
    alreadyActivatedModal = true;
}


document.addEventListener('scroll', () => {
    if(isReferredNotFromMe() && !alreadyActivatedModal){
        $('#modalNewsletter').modal('show');
        setModalViewd();
    }
})
