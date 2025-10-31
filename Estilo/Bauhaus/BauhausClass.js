class Bauhaus{
    constructor(QuadSize, Colors, ColorsXtra){
        this.QuadSize = QuadSize;
        this.Colors = Colors;
        this.ColorsXtra = ColorsXtra;
    }

    Generate(o=null,p=0.5) {
        stroke(0);
        //Cria um grid vazio
        let grid = [];
        for (let i = 0; i < int(height/this.QuadSize)+1; i++) {
            let subList = [];
            for (let f = 0; f < int(width / this.QuadSize)+1; f++) {
                if(o && (Math.random() > p)){
                    subList.push(true);
                }else{
                    subList.push(false);
                }
            }
            grid.push(subList);
        } //Popula o grid
        for (let i = 0; i < grid.length; i++) {
            for (let f = 0; f < grid[i].length; f++) {
                if (!grid[i][f]) { //Ignora lugares ocupados
                    let colors = (this.Colors.slice().concat(this.ColorsXtra.slice())).sort(() => Math.random() - 0.5);
                    push();
                    translate(f * this.QuadSize, i * this.QuadSize);
                    fill(colors[0]);
                    let quadSize = this.QuadSize;
                    if (int(random(0, 20)) == 0) {
                        if (i+1 < grid.length && f+1 < grid[i].length) {
                            if ( /*Checa se pode ser o quadrado maior*/
                                !(
                                    grid[i][f+1] &&
                                    grid[i+1][f+1] &&
                                    grid[i][f]
                                )
                            ) {
                                grid[i][f+1]= true;
                                grid[i+1][f+1]= true;
                                grid[i+1][f]=true;
                                quadSize = this.QuadSize * 2;
                            }
                        }
                    }
                    quad(0, 0, quadSize, 0, quadSize, quadSize, 0, quadSize);
                    if (int(random(0, 5)) == 0) {
                        let direc = int(random(1, 4));
                        fill(colors[1]);
                        let xf = quadSize;
                        let yf = 0;
                        switch (direc) {
                            case 2:
                                xf = quadSize;
                                yf = quadSize;
                                break;
                                case 3:
                                xf = 0;
                                yf = quadSize;
                                break;
                            case 4:
                                xf = 0;
                                break;
                        }
                        if (int(random(0, 2)) == 0) {
                            this.Triangle(xf, yf, quadSize, direc);
                        } else {
                            this.Arc(xf, yf, quadSize, direc);
                        }
                    }
                    pop();
                    grid[i][f] = true;
                }
            }
        }
    }

    Triangle(x, y, l, d) {
        push();
        translate(x, y);
        rotate(radians(d * 90));
        triangle(0, 0, 0, l, l / 2, l / 2);
        pop();
    }
    
    Arc(x, y, l, d) {
        push();
        translate(x, y);
        ellipseMode(CENTER);
        rotate(radians(d * 90));
        arc(0, 0, l * 2, l * 2, radians(0), radians(90), PIE);
        pop();
    }
}