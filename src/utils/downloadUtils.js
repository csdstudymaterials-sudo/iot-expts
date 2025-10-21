// utils/downloadUtils.js
// Utility functions for downloading experiments and code

// Function to download entire experiment as text file
export const downloadExperiment = (experiment) => {
  let content = '';

  // Add experiment header
  content += 'KONGU ENGINEERING COLLEGE\n';
  content += 'DEPARTMENT OF COMPUTER SCIENCE AND DESIGN\n';
  content += 'IoT LABORATORY EXPERIMENT\n\n';

  // Add experiment details
  content += `EXPERIMENT ${experiment.id}: ${experiment.name}\n\n`;

  // Add aim
  content += `AIM:\n${experiment.aim}\n\n`;

  // Add components
  content += `COMPONENTS USED:\n`;
  experiment.components.forEach((component, index) => {
    content += `${index + 1}. ${component}\n`;
  });
  content += '\n';

  // Add procedure
  if (experiment.procedure && experiment.procedure.length > 0) {
    content += `PROCEDURE:\n`;
    experiment.procedure.forEach((step, index) => {
      content += `${index + 1}. ${step}\n`;
    });
    content += '\n';
  }

  // Add programs
  if (experiment.program && experiment.program.length > 0) {
    content += `PROGRAMS:\n`;
    experiment.program.forEach((prog, index) => {
      content += `${index + 1}. ${prog.title}\n`;
      content += `${'='.repeat(prog.title.length + 3)}\n`;
      content += `${prog.code}\n\n`;
    });
  }

  // Add output
  if (experiment.output) {
    content += `OUTPUT:\n${experiment.output}\n\n`;
  }

  // Add footer
  content += 'Developed by 2023-27 batch\n';
  content += 'Kongu Engineering College IoT Laboratory\n';

  // Create blob and download
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;

  // Generate filename from experiment name
  const filename = `Experiment_${experiment.id}_${experiment.name.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '_').substring(0, 50)}.txt`;
  a.download = filename;

  // Trigger download
  document.body.appendChild(a);
  a.click();

  // Clean up
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
};

// Function to download code as a file
export const downloadCode = (code, title) => {
  // Determine file extension based on code type
  let extension = '.ino';
  let mimeType = 'text/plain';
  // If the code looks like HTML, use .html
  if (code.trim().startsWith('<!DOCTYPE html>')) {
    extension = '.html';
    mimeType = 'text/html';
  } else if (title.toLowerCase().includes('python') || code.includes('import ') || code.includes('def ')) {
    extension = '.py';
    mimeType = 'text/x-python';
  }
  // Create a blob with the code content
  const blob = new Blob([code], { type: mimeType });
  // Create a temporary URL for the blob
  const url = window.URL.createObjectURL(blob);
  // Create a temporary anchor element
  const a = document.createElement('a');
  a.href = url;
  // Generate filename from title (remove special characters and add correct extension)
  const filename = title.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '_') + extension;
  a.download = filename;
  // Trigger the download
  document.body.appendChild(a);
  a.click();
  // Clean up
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
};

// Function to download a range of experiments as a single text file
export const downloadExperimentsRange = (experimentsArray, startId, endId) => {
  const selected = experimentsArray.filter(e => e.id >= startId && e.id <= endId);
  if (!selected || selected.length === 0) return;

  let content = '';
  content += 'KONGU ENGINEERING COLLEGE\n';
  content += 'DEPARTMENT OF COMPUTER SCIENCE AND DESIGN\n';
  content += `IoT LABORATORY EXPERIMENTS ${startId} to ${endId}\n\n`;

  selected.forEach((experiment) => {
    content += `EXPERIMENT ${experiment.id}: ${experiment.name}\n\n`;
    content += `AIM:\n${experiment.aim}\n\n`;

    content += `COMPONENTS USED:\n`;
    experiment.components.forEach((component, index) => {
      content += `${index + 1}. ${component}\n`;
    });
    content += '\n';

    if (experiment.procedure && experiment.procedure.length > 0) {
      content += `PROCEDURE:\n`;
      experiment.procedure.forEach((step, index) => {
        content += `${index + 1}. ${step}\n`;
      });
      content += '\n';
    }

    if (experiment.program && experiment.program.length > 0) {
      content += `PROGRAMS:\n`;
      experiment.program.forEach((prog, index) => {
        content += `${index + 1}. ${prog.title}\n`;
        content += `${'='.repeat(prog.title.length + 3)}\n`;
        content += `${prog.code}\n\n`;
      });
    }

    if (experiment.output) {
      content += `OUTPUT:\n${experiment.output}\n\n`;
    }

    content += '----------------------------------------\n\n';
  });

  content += 'Developed by 2023-27 batch\n';
  content += 'Kongu Engineering College IoT Laboratory\n';

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  const filename = `Experiments_${startId}_to_${endId}.txt`;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
};