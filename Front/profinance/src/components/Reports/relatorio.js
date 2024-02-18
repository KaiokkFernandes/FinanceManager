import jsPDF from 'jspdf';

const RelatorioPDF = (users, totalMensal) => {
  if (!users || !Array.isArray(users) || typeof totalMensal !== 'number') {
    console.error('Dados de usuários inválidos ou total mensal indefinido');
    return;
  }

  const doc = new jsPDF();
  doc.setFontSize(18);
  doc.text('Relatório de gastos mensal:', 14, 22);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('ID', 14, 32);
  doc.text('Descrição', 40, 32);
  doc.text('Valor (R$)', 160, 32);
  doc.setDrawColor(0);
  doc.line(10, 34, 200, 34);
  doc.setFont('helvetica', 'normal');

  let y = 40; 

  users.forEach((user, index) => {
    const valorNumerico = parseFloat(user.valor);
    if (isNaN(valorNumerico)) {
      console.error(`Valor inválido para o usuário ID ${user.id}`);
      return;
    }
    const valorFormatado = user.isExpense ? `-R$ ${valorNumerico.toFixed(2)}` : `R$ ${valorNumerico.toFixed(2)}`;
    
    if (y > 280) {
      doc.addPage();
      y = 10; 
    }

    doc.text(user.id.toString(), 14, y);
    doc.text(user.desc, 40, y);
    doc.text(valorFormatado, 160, y, { align: 'right' });

    y += 6; 
  });

  doc.line(10, y, 200, y);
  y += 6;

  // Escrever o total mensal fornecido
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('Total Mensal:',  130, y);
  doc.text(`R$ ${totalMensal.toFixed(2)}`, 180, y, { align: 'right' });

  doc.save('relatorio_usuarios.pdf');
};

export default RelatorioPDF;
