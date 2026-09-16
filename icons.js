const shapes = {
 book:'M3 4h6a4 4 0 0 1 3 2 4 4 0 0 1 3-2h6v15h-6a4 4 0 0 0-3 2 4 4 0 0 0-3-2H3Z M12 6v15',
 words:'M4 6h16M4 12h11M4 18h7M18 10l3 3-3 3M21 13h-6',
 concepts:'M9 18h6M10 21h4M8 14a7 7 0 1 1 8 0c-1 1-1 2-1 3H9c0-1 0-2-1-3',
 image:'M3 3h18v18H3ZM3 17l6-6 4 4 3-3 5 5M16 7h.01',
 comment:'M4 4h16v13H9l-5 4ZM8 8h8M8 12h5',
 moon:'M20 14a8 8 0 0 1-10-10 8 8 0 1 0 10 10',
 sun:'M12 3V1M12 23v-2M3 12H1M23 12h-2M5 5 3 3M21 21l-2-2M5 19l-2 2M21 3l-2 2 M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0',
 link:'M10 14l4-4M8 16l-1 1a4 4 0 0 1-5-5l4-4a4 4 0 0 1 5 0M16 8l1-1a4 4 0 0 1 5 5l-4 4a4 4 0 0 1-5 0',
 mountain:'M2 20 10 4l5 9 3-5 5 12ZM7 10l3 2 3-2',
 people:'M10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0M20 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0M2 21v-4a5 5 0 0 1 10 0v4M12 16a5 5 0 0 1 10 1v4',
 crown:'M3 6l5 5 4-7 4 7 5-5-2 13H5ZM5 22h14',
 lock:'M5 10h14v11H5ZM8 10V7a4 4 0 0 1 8 0v3M12 14v3',
 calendar:'M4 5h16v16H4ZM4 10h16M8 2v6M16 2v6',
 leaf:'M4 20C1 10 9 3 21 3c0 12-7 20-17 17ZM4 20 16 8'
};
export const icon = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${shapes[name]?`<path d="${shapes[name]}"/>`:''}</svg>`;

