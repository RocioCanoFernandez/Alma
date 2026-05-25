function generateVCard() {
  const hubUrl = "https://hub-hub-alma.npfusf.easypanel.host/";
  const vcard = `BEGIN:VCARD
VERSION:3.0
N:Sánchez Vázquez;Alma;;;
FN:Alma Sánchez Vázquez
ORG:Clínica Montecarmelo
TITLE:Gerente
TEL;TYPE=WORK,VOICE:619387995
TEL;TYPE=CELL,VOICE:619387995
EMAIL;TYPE=WORK,INTERNET:direccion@clinicamontecarmelo.es
URL:https://clinicamontecarmelo.es/
URL;TYPE=HUB:${hubUrl}
NOTE:Clínica integral especializada en odontología avanzada, medicina estética, cirugía plástica y tratamientos capilares.
END:VCARD`;

  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Alma_Sanchez_Clinica_Montecarmelo.vcf');
  document.body.appendChild(link);
  link.click();
  
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}
