function obfuscateMail(elId, user, domain, tld){
  var addr = user + "@" + domain + "." + tld;
  var a = document.getElementById(elId);
  if(!a) return;
  a.href = "mailto:" + addr;
  a.textContent = user + " [at] " + domain + "." + tld;
}