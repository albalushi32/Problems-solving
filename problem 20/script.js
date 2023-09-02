function twater(h) {
    let x = h.length;
  
    let a = [];
    let b = [];
  
    a[0] = h[0];
    for (let i = 1; i < x; i++) {
      a[i] = Math.max(a[i - 1], h[i]);
    }
  
    b[x - 1] = h[x - 1];
    for (let i = x - 2; i >= 0; i--) {
      b[i] = Math.max(b[i + 1], h[i]);
    }
  
    let w = 0;
  
    for (let i = 0; i < x; i++) {
      const water = Math.min(a[i], b[i]) - h[i];
      w += water;
    }
  
    return w;
  }
  
  const h= [3,0,0,2,0,4];
  const w = twater(h);
  console.log(w);