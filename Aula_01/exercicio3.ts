namespace exemplo2{
    let resultado: number;
    let somapeso: number;
    let n1: number, n2: number, n3: number, p1: number, p2: number, p3: number;
    n1 = 5;
    n2 = 7;
    n3 = 8;
    p1 = 5;
    p2 = 3;
    p3 = 2;
    somapeso = p1 + p2 + p3;
    resultado = (n1 * p1 + n2 * p2 + n3 * p3) / somapeso;
    console.log(`A media aritmetica entre ${n1} peso ${p1}, ${n2} peso ${p2} e ${n3} peso ${p3}, é igual a: ${resultado}`);

}