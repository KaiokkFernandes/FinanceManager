import jsPDF from 'jspdf';

const RelatorioPDF = (users) => {
  if (!users || !Array.isArray(users)) {
    console.error('Dados de usuários inválidos ou indefinidos');
    return;
  }

  const doc = new jsPDF();
  doc.text('Relatório de Usuários', 10, 10);
  users.forEach((user, index) => {
    doc.text(`${index + 1}. ${user.desc} - Valor: ${user.valor}`, 10, (index + 1) * 10 + 20);
  });
  doc.save('relatorio_usuarios.pdf');
};

export default RelatorioPDF;   