var crash
const boardSize=400
const cellSize=40
  log=(v)=>{console.log(v)}
 
 sim=(m,n)=>{
     return Math.floor(Math.random()*(m-n)+n)
 }
check=(n)=>{
let vests=0
for(let a=0; a<n.length; a++){
for(let v=0; v<bond.cells.length; v++){
if(n[a][0]===bond.cells[v].i&&n[a][1]===bond.cells[v].j){
if(bond.cells[v].bee){
vests++
}
	}
}
}
return  vests
}
 const message=document.querySelector("#message")
const sketch =document.querySelector (".sketch")
sketch.style.width="400px"
sketch.style.height="400px"
//sketch.style.backgroundColor="teal"
sketch.style.marginTop="50px"
sketch.style.boxShadow="0px 0px 5px 3px black"
const start = sketch.getBoundingClientRect();
const startx= start.left; 
const starty= start.top;
//log(startx)
class cell{
constructor(i,j){
this.i=i
this.j=j
this.x=i*cellSize 
this.y=j*cellSize 
this.bee=false
this.sh=false 
this.visible=false
this.mass=document.createElement("div")
this.mass.style.width=`${cellSize}px`
this.mass.style.height=`${cellSize}px`
this.mass.style.position="absolute"
this.mass.style.left=`${startx+this.x}px`
this.mass.style.top=`${starty+this.y}px`
this.mass.style.border="1px solid orange"
this.mass.style.textAlign="center"
this.mass.style.display="flex"
this.mass.style.justifyContent ="center"
this.mass.style.alignItems="center"
this.mass.style.borderRadius="5px"
this.mass.style.backgroundColor="teal"


sketch.append(this.mass)
}
show(){
if(!this.visible){
this.visible =true 
if(this.bee){
this.mass.style.backgroundColor("black")
}
if(!this.bee){
let m =tri(this.i,this.j)
let x=check(m)
if(x>0){
let p =document.createElement("h4")
p.textContent=`${x}`
p.style.fontSize=`${cellSize/2}px`
this.mass.append(p)
}
if(x===0){
this.mass.style.backgroundColor ="green"
}
}

}
}
reveal(){
this.mass.addEventListener("click",()=>{
for(let i=0; i<bond.cells.length; i++){ 
if(bond.cells[i].visible){
this.sh=false
}
}
if(this.sh){

//////left here

}
if(!this.visible){
this.visible=true
if(this.bee){
for(let i=0; i<bond.cells.length; i++){
bond.cells[i].visible=true
}
message.textContent="sorry, you triggered a mine ☠⚠️☢"
let r =document.createElement("img")
r.src="./images/Jerry.png"
r.style.width=`${cellSize}px`
r.style.height=`${cellSize}px`
this.mass.append(r)
}
if(!this.bee){
let m =tri(this.i,this.j)
let x=check(m)
if(x>0){
let p =document.createElement("h4")
p.textContent=`${x}`
p.style.fontSize=`${cellSize/2}px`
this.mass.append(p)
}
if(x===0){
///remove already visible from m
let m =tri(this.i,this.j)
for(let i=0; i<2; i++){ 
let d = m[sim(m.length,0)]
for(let f=0; f<bond.cells.length; f++){ 
if(bond.cells[f].i===d[0]&&bond.cells[f].j===d[1]){
bond.cells[f].show()
}
}
    }
this.mass.style.backgroundColor ="green"

}
}
}



})

}
}

class board{
constructor(){
this.rows=boardSize/cellSize
this.cols=boardSize/cellSize
this.cells=[]

for(let i=0; i<this.rows; i++){
for(let j=0; j<this.cols; j++){
let r=new cell(i,j)
//r.mass.textContent=`${[i,j]}`
r.reveal()
this.cells.push(r)
}
}

}

////
}

tri=(i,j)=>{
let scheme=[]
for(let a=i-1; a<=i+1; a++){
for(let b=j-1; b<=j+1; b++){
let u =[a,b]
scheme.push(u)
}
}
return scheme 
}

populate=(a,z)=>{
let d =boardSize/cellSize 
let k =d*d
let w=Math.floor (k*(a*0.01))
let shown=[]
for(let i=0; i<w; i++){
let r=Math.floor (Math.random()*(z.cells.length-0))
let rad=z.cells[r]
rad.bee=true

}
}


let bond = new board()
populate(15,bond)


//to do


//clicking  no bee opens two random neighbour cells
//make sure first click is never a mine
