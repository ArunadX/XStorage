function copytext(){
    let support_emai = document.getElementById('support_email_comman');
    support_emai.select();
    document.execCommand("copy");
    console.log(support_emai);
    window.alert('The support email has been copied to your clipboard!. See DeveloperTools/Console for more information in your browser')


}