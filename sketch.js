let mic;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  noFill();

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background("#2A2A2A");
  strokeWeight(5);

  let raggio_piccolo = 20;
  let raggio_medio = 40;
  let raggio_grande = 60;

  let lunghezza_tot =
    raggio_piccolo * 10 + raggio_medio * 8 + raggio_grande * 4;
  let margine = (width - lunghezza_tot) / 2;

  let text_h = max(volume(10000), raggio_grande * 2);

  let base_y = (height - text_h) / 2 + text_h;
  let base_x = margine;

  // linea di base
  stroke("#D76751");

  // --- M --- //

  let asta_m_l = text_h - raggio_piccolo - raggio_medio;
  let m_sotto_y = base_y - raggio_piccolo;
  let m_sopra_y = m_sotto_y - asta_m_l;
  let y_inizio = m_sotto_y + raggio_piccolo;

  let arco_1_x = base_x;
  arc(arco_1_x, m_sotto_y, 2 * raggio_piccolo, 2 * raggio_piccolo, 0, 90);

  line(arco_1_x, y_inizio, 0, y_inizio);

  let asta_m_x = base_x + raggio_piccolo;
  line(asta_m_x, m_sotto_y, asta_m_x, m_sopra_y);

  let arco_2_x = asta_m_x + raggio_medio;
  arc(arco_2_x, m_sopra_y, 2 * raggio_medio, 2 * raggio_medio, 180, 0);

  let asta_m_x2 = asta_m_x + raggio_medio * 2;
  line(asta_m_x2, m_sopra_y, asta_m_x2, m_sotto_y);

  let arco_3_x = asta_m_x2 + raggio_piccolo;
  arc(arco_3_x, m_sotto_y, 2 * raggio_piccolo, 2 * raggio_piccolo, 0, 180);

  let asta_m_x3 = asta_m_x2 + raggio_piccolo * 2;
  line(asta_m_x3, m_sotto_y, asta_m_x3, m_sopra_y);

  let arco_4_x = asta_m_x2 + raggio_medio * 2;
  arc(arco_4_x, m_sopra_y, 2 * raggio_medio, 2 * raggio_medio, 180, 0);

  let asta_m_x4 = asta_m_x3 + raggio_medio * 2;
  line(asta_m_x4, m_sopra_y, asta_m_x4, m_sotto_y);

  // --- Congiunzione --- //

  let arco_5_x = asta_m_x4 + raggio_piccolo;
  arc(arco_5_x, m_sotto_y, 2 * raggio_piccolo, 2 * raggio_piccolo, 0, 180);

  // // --- A --- //

  let asta_a_l = text_h - raggio_piccolo - raggio_grande;
  let a_sotto_y = base_y - raggio_piccolo;
  let a_sopra_y = a_sotto_y - asta_a_l;

  let asta_a_sx_x = arco_5_x + raggio_piccolo;
  line(asta_a_sx_x, a_sotto_y, asta_a_sx_x, a_sopra_y);

  let arco_6_x = asta_a_sx_x + raggio_grande;
  arc(arco_6_x, a_sopra_y, 2 * raggio_grande, 2 * raggio_grande, 180, 0);

  let asta_a_dx_x = arco_6_x + raggio_grande;
  line(asta_a_dx_x, a_sopra_y, asta_a_dx_x, a_sotto_y);

  // --- Congiunzione --- //

  let arco_7_x = asta_a_dx_x + raggio_piccolo;
  arc(arco_7_x, a_sotto_y, 2 * raggio_piccolo, 2 * raggio_piccolo, 0, 180);

  // // --- N --- //

  let asta_n_l = text_h - raggio_piccolo * 2;
  let n_sotto_y = base_y - raggio_piccolo;
  let n_sopra_y = n_sotto_y - asta_n_l;
  let n_sotto_ng_y = base_y - raggio_piccolo * 2;
  let n_sopra_ng_y = n_sotto_y - asta_n_l + raggio_piccolo;

  let asta_n_sx_x = arco_7_x + raggio_piccolo;
  line(asta_n_sx_x, n_sopra_y, asta_n_sx_x, n_sotto_y);

  let arco_8_x = asta_n_sx_x + raggio_piccolo;
  arc(arco_8_x, n_sopra_y, 2 * raggio_piccolo, 2 * raggio_piccolo, 180, 0);

  let asta_n_dx_x = arco_8_x + raggio_piccolo;
  line(asta_n_dx_x, n_sopra_y, asta_n_dx_x, n_sotto_ng_y);

  let arco_9_x = asta_n_dx_x + raggio_medio;
  arc(arco_9_x, n_sotto_ng_y, 2 * raggio_medio, 2 * raggio_medio, 0, 180);

  let asta_dx2_x = asta_n_dx_x + raggio_medio * 2;
  line(asta_dx2_x, n_sopra_ng_y, asta_dx2_x, n_sotto_ng_y);

  //--- Congiunzione --- //
  let n_cong_sopra_y = n_sotto_y - asta_n_l + raggio_piccolo;
  let n_cong_sotto_y = n_sopra_y + asta_n_l - raggio_medio;
  let arco_10_x = asta_dx2_x + raggio_medio;
  arc(arco_10_x, n_cong_sopra_y, 2 * raggio_medio, 2 * raggio_medio, 180, 0);

  // // --- U --- // //

  let u_sotto_u_y = base_y - raggio_piccolo * 3;
  let u_sopra_u_y = n_sotto_y - asta_n_l + raggio_piccolo;

  let asta_u_sx_x = arco_10_x + raggio_medio;
  line(asta_u_sx_x, u_sopra_u_y, asta_u_sx_x, u_sotto_u_y);

  let arco_11_x = asta_u_sx_x + raggio_grande;
  arc(arco_11_x, n_cong_sotto_y, 2 * raggio_grande, 2 * raggio_grande, 0, 180);

  let asta_u_dx_x = arco_11_x + raggio_grande;

  //--- Congiunzione --- //
  let u2_cong_sopra_y = base_y - raggio_grande - asta_a_l;
  let arco_12_x = asta_u_dx_x + raggio_piccolo;

  line(asta_u_dx_x, u2_cong_sopra_y, asta_u_dx_x, u_sotto_u_y);

  arc(
    arco_12_x,
    u2_cong_sopra_y,
    2 * raggio_piccolo,
    2 * raggio_piccolo,
    180,
    270
  );

  // linea secondaria
  stroke("#D76751");
  let line_sec_y = u2_cong_sopra_y - raggio_piccolo;
  line(arco_12_x, line_sec_y, width, line_sec_y);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function volume(t = 1) {
  return mic.getLevel() * t;
}
