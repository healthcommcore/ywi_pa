/***
 * RokRainbow - A theme chooser, maker and switcher on the fly, that uses an highly customized version of mooRainbow
 *
 * @version		1.0
 * 
 * @author		Djamil Legato <djamil@rockettheme.com>
 * @copyright	Andy Miller @ Rockettheme, LLC
 * @infos		MooRainbow: http://moorainbow.woolly-sheep.net
 *
 */

var overlays = [
	'overlay-abstract', 'overlay-bark', 'overlay-blocks', 'overlay-carbon', 'overlay-cracked', 'overlay-crecent', 'overlay-foliage', 'overlay-gatorskin', 'overlay-gradient1', 'overlay-gradient2',
	'overlay-hills', 'overlay-hills-trees', 'overlay-mosaic', 'overlay-perforated', 'overlay-spirals', 'overlay-spirals2', 'overlay-stripes-diag',
	'overlay-stripes-vert', 'overlay-targets'
];

// Theme Syntax: 
//   'Theme Name': ['overlay-name', '#1st_color', '#1st_text', '#2nd_color', '#2nd_text', '#3d_color', '#3d_text']  
var themes = new Hash({
	"Business Casual": ["overlay-gradient2", "#688ba0", "#ffffff", "#001d30", "#d5e1ed", "#ff672d", "#ffebde"],
	"Borealis": ["overlay-spirals2", "#657d2d", "#e3e6cf", "#acb588", "#2f3d19", "#07232e", "#d3dee6"],
	"Blueberry Lime": ["overlay-stripes-vert", "#263248", "#d1d4de", "#95ad2a", "#ffffff", "#6e7791", "#e1e3f0"],
	"Cherry Cheesecake": ["overlay-spirals", "#4c1b1b", "#ebdad8", "#bf9971", "#3d1814", "#b9121b", "#f0c9c9"],
	"Classic Green": ["overlay-blocks", "#2f5c24", "#e1f2df", "#333333", "#dddddd", "#bab829", "#ffffff"],
	"Classic Red": ["overlay-gatorskin", "#821509", "#e3d2cf", "#333333", "#dddddd", "#c27306", "#f7e8c8"],
	"Elegant Portfolio": ["overlay-abstract", "#41524d", "#ced9d7", "#b56d2e", "#ede2d3", "#783e1a", "#edded1"],
	"Monochrome": ["overlay-bark", "#555555", "#eeeeee", "#aaaaaa", "#222222", "#000000", "#cccccc"],
	"Midnight Visions": ["overlay-carbon", "#181818", "#cccccc", "#678f13", "#dbedc0", "#cc7700", "#f2e5cb"],
	"Midnight Visions II": ["overlay-bark", "#181818", "#cccccc", "#2064a8", "#cbddf5", "#942994", "#f7daf5"],
	"Sahara": ["overlay-cracked", "#574d2f", "#e8deca", "#b0a174", "#2e2b18", "#b0922e", "#ffffff"],
	"Smooth Sailing": ["overlay-carbon", "#587058", "#d3e8d5", "#587789", "#c5d5e3", "#e86850", "#dec7bf"],
	"Soft and Sweet": ["overlay-foliage", "#433c40", "#ded3d8", "#a18584", "#f5eae9", "#d11b5c", "#ebd1d7"],
	"Spangled": ["overlay-stripes-vert", "#001a2e", "#d1ddeb", "#8f0000", "#f2dcda", "#9c9457", "#edecd5"],
	"Sunny Side Up": ["overlay-hills-trees", "#2587C4", "#ffffff", "#222222", "#dddddd", "#F08C00", "#ffffff"],
	"Thin Candy Shell": ["overlay-stripes-vert", "#cedaed", "#152f59", "#b4cf9b", "#324222", "#c783a8", "f7dfea"],
	"Torrino": ["overlay-mosaic", "#61282f", "#dbd7d7", "#72929e", "#f5fafc", "#232e3d", "#c5c9d1"],
	"Warm Vintage": ["overlay-stripes-vert", "#342f29", "#dbd6c5", "#8f4721", "#ebd8c7", "#587265", "#dff0e9"]
});


// Modify the update css syntax only if you know what you're doing!
var update = [
	['body', '#horiz-menu', '#horiz-menu ul ul', '#bottommodules .module-hilite1 h3', 'td.leftcol .module-hilite1 h3', 'td.rightcol .module-hilite1 h3', '#mainmodules1 .module-hilite1 h3', '#mainmodules2 .module-hilite1 h3'],
	['#horiz-menu a', 'td.leftcol .module-hilite1 h3', 'td.rightcol .module-hilite1 h3', '#mainmodules1 .module-hilite1 h3', '#mainmodules2 .module-hilite1 h3', '#bottommodules .module-hilite1 h3', '#bottommodules .module-clean h3'],
	['#horiz-menu li.active a', 'td.leftcol .module h3', 'td.rightcol .module h3', '#mainmodules1 .module h3', '#mainmodules2 .module h3', '#bottommodules .module h3', 'td.leftcol .module-hilite5', 'td.rightcol .module-hilite5', '#mainmodules1 .module-hilite5', '#mainmodules2 .module-hilite5', 'td.leftcol .module-hilite5 h3', 'td.rightcol .module-hilite5 h3', '#mainmodules1 .module-hilite5 h3', '#mainmodules2 .module-hilite5 h3'],
	['#horiz-menu li.active a', 'td.leftcol .module-hilite5', 'td.rightcol .module-hilite5', '#mainmodules1 .module-hilite5', '#mainmodules2 .module-hilite5', 'td.leftcol .module-hilite5 h3', 'td.rightcol .module-hilite5 h3', '#mainmodules1 .module-hilite5 h3', '#mainmodules2 .module-hilite5 h3', 'td.leftcol .module h3', 'td.rightcol .module h3', '#mainmodules1 .module h3', '#mainmodules2 .module h3', '#bottommodules .module h3'],
	['td.leftcol .module-hilite4 h3', 'td.rightcol .module-hilite4 h3', '#mainmodules1 .module-hilite4 h3', '#mainmodules2 .module-hilite4 h3', '#bottommodules .module-hilite4 h3'],
	['.module-hilite4 h3', '#bottommodules .module-hilite4 h3'],
	['.contentheading', '#tabmodules .module h3', '.contentheading', 'h4'],
	['h2'],
	['#banner a', '#main-content a', '#top-bar a']
];
 
// Easy theme assembler, for debug and developement of new themes
// You must have firebug or a javascript console debugger
// Set the following variable to true
var themeDebugger = false;
 
 
// --
// Do not edit what follows!
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('u 20=G 24({12:{2l:\'4F\',X:\'48-\',1s:\'39/\',1V:[3O,0,0],4E:24.2d,2f:24.2d},3p:C(a,b){9.1L=$(a);F(!9.1L)15;9.3P(b);9.1z=0;9.W={x:0,y:0};9.4D=9.12.1V;9.3w=9.12.1V;9.1h={1i:[],K:[],O:[]};9.4b=1q;9.47=1q;F(!9.v)9.3g();9.3e();9.3c();9.v.N.J(\'P-I\',9.12.1V.1m());9.W.x=9.D(\'1g\').l+9.D(\'1d\',\'L\').w;9.W.y=9.D(\'1g\').t+9.D(\'1d\',\'L\').h;9.2k(9.12.1V);9.W.x=9.D(\'1g\').l+9.D(\'1d\',\'L\').w;9.W.y=9.D(\'1g\').t+9.D(\'1d\',\'L\').h;9.1z=9.D(\'2b\')-9.D(\'1x\',\'L\');F(1l.2R)9.1M()},4C:C(){9[(9.2e)?\'1M\':\'2D\']()},2D:C(){9.2F();9.v.J(\'2H\',\'3C\');9.2e=1S;15 9},1M:C(){9.v.25({\'2H\':\'3r\'});9.2e=1q;15 9},2k:C(a,b){F(!b||(b!=\'K\'&&b!=\'O\'))b=\'1i\';u c,K,O;F(b==\'1i\'){c=a;K=a.2a();O=a.1m()}19 F(b==\'K\'){K=a;c=a.29();O=c.1m()}19{O=a;c=a.28(1S);K=c.2a()}9.26(c);9.2y(K);9.2w=9.1h},2y:C(a){u b=9.D(\'1d\',\'L\').h;u d=9.D(\'1d\',\'L\').w;u e=9.v.N.M;u f=9.v.N.10;u g=9.v.U.M;u h=9.D(\'1x\',\'L\');u i;u j=1k.1C(((f*a[1])/Y)-d);u k=1k.1C(-((e*a[2])/Y)+e-b);u c=1k.1C(((g*a[0])/1K));c=(c==1K)?0:c;u l=g-c+9.D(\'U\')-h;i=[9.1h.K[0],Y,Y].29().1m();9.v.1a.25({\'1e\':k,\'1D\':j});9.v.1n.J(\'1e\',l);9.v.N.J(\'P-I\',i);9.1z=9.D(\'2b\')-h;9.W.x=9.D(\'1g\').l+d;9.W.y=9.D(\'1g\').t+b},26:C(a,b){F(!b||(b!=\'K\'&&b!=\'O\'))b=\'1i\';u c,K,O;F(b==\'1i\'){c=a;K=a.2a();O=a.1m()}19 F(b==\'K\'){K=a;c=a.29();O=c.1m()}19{O=a;c=a.28();K=c.2a()}9.1h={1i:c,K:K,O:O};F(!$3R(9.W.x))9.2y(K);9.3w=c;9.1Y.J(\'P-I\',c.1m())},2q:C(x,y,z){u s=1k.1C((x*Y)/9.v.N.10);u b=Y-1k.1C((y*Y)/9.v.N.M);u h=1K-1k.1C((z*1K)/9.v.U.M)+9.D(\'U\')-9.D(\'1x\',\'L\');h-=9.D(\'1x\',\'L\');h=(h>=1K)?0:(h<0)?0:h;s=(s>Y)?Y:(s<0)?0:s;b=(b>Y)?Y:(b<0)?0:b;15[h,s,b]},3e:C(){u b,1P,1I,16;1P=9.D(\'1d\',\'L\').h;1I=9.D(\'1d\',\'L\').w;[9.1L,9.v].18(C(a){a.33({\'31\':C(e){G 1H(e).30()},\'2Y\':C(e){e=G 1H(e);F(e.3M==\'3L\'&&9.2e)9.1M(9.v)}.1r(9)},9)},9);b={x:[0-1I,(9.v.N.10-1I)],y:[0-1P,(9.v.N.M-1P)]};9.v.2W=G 3a.2U(9.v.1a,{2T:b,2S:9.2i.1r(9),2Q:9.2i.1r(9),2P:0});9.v.2O.1E(\'3B\',C(e){e=G 1H(e);9.v.1a.25({\'1e\':e.2N.y-9.v.N.3y()-1P,\'1D\':e.2N.x-9.v.N.4v()-1I});9.v.2W.2K(e)}.1r(9))},2i:C(){u a=9.D(\'1d\',\'L\').h;u b=9.D(\'1d\',\'L\').w;9.W.x=9.D(\'1g\').l+b;9.W.y=9.D(\'1g\').t+a;9.26(9.2q(9.W.x,9.W.y,9.1z),\'K\');9.2w=9.1h;9.1Q(\'2f\',[9.1h,9])},3c:C(){u a=9.D(\'1x\',\'L\'),2I;2I=[0+9.D(\'U\')-a,9.v.U.M-a+9.D(\'U\')];9.v.1U=G 3a.2U(9.v.1n,{2T:{y:2I},4n:{x:1q},2S:9.1U.1r(9),2Q:9.1U.1r(9),2P:0});9.v.U.1E(\'3B\',C(e){e=G 1H(e);9.v.1n.J(\'1e\',e.2N.y-9.v.U.3y()+9.D(\'U\')-a);9.v.1U.2K(e)}.1r(9))},1U:C(){u a=9.D(\'1x\',\'L\'),2G;9.1z=9.D(\'2b\')-a;9.26(9.2q(9.W.x,9.W.y,9.1z),\'K\');2G=[9.1h.K[0],Y,Y].29().1m();9.v.N.J(\'P-I\',2G);9.2w=9.1h;9.1Q(\'2f\',[9.1h,9])},3g:C(){u a=9.12.2l,X=9.12.X;u b=a+\' .\'+X;9.v=G 11(\'1y\',{\'1b\':{\'2H\':\'3C\'},\'2l\':a}).Z(9.1L);u c=G 11(\'1y\',{\'1b\':{\'1f\':\'3t\'},\'1c\':X+\'4f\'}).Z(9.v);u d=G 11(\'1y\',{\'1b\':{\'1f\':\'1t\',\'2C\':\'3q\'},\'1c\':X+\'4c\'}).Z(c);u e=G 11(\'1y\',{\'1b\':{\'1f\':\'1t\',\'1O\':3},\'1c\':X+\'1n\'}).Z(c);e.10=e.14(\'10\').T();e.M=e.14(\'M\').T();u f=G 11(\'2A\',{\'1b\':{\'P-I\':\'#27\',\'1f\':\'3t\',\'1O\':2},\'1j\':9.12.1s+\'4a.2z\',\'1c\':X+\'N\'}).Z(d);u g=G 11(\'2A\',{\'1b\':{\'1f\':\'1t\',\'1e\':0,\'1D\':0,\'1O\':2},\'1j\':9.12.1s+\'49.2z\',\'1c\':X+\'N\'}).Z(d);F(1l.45){d.J(\'2C\',\'\');u h=f.1j;f.1j=9.12.1s+\'3n.3m\';f.1F.2v="3l:3k.3j.3i(1j=\'"+h+"\', 3h=\'3f\')";h=g.1j;g.1j=9.12.1s+\'3n.3m\';g.1F.2v="3l:3k.3j.3i(1j=\'"+h+"\', 3h=\'3f\')"}f.10=g.10=d.14(\'10\').T();f.M=g.M=d.14(\'M\').T();u i=G 11(\'1y\',{\'1b\':{\'2C\':\'3q\',\'1f\':\'1t\',\'1O\':2},\'1c\':X+\'1a\'}).Z(d);i.10=i.14(\'10\').T();i.M=i.14(\'M\').T();u j=G 11(\'2A\',{\'1b\':{\'1f\':\'1t\',\'z-44\':2},\'1j\':9.12.1s+\'43.2z\',\'1c\':X+\'U\'}).Z(c);9.v.U=$E(\'#\'+b+\'U\');j.10=j.14(\'10\').T();j.M=j.14(\'M\').T();G 11(\'1y\',{\'1b\':{\'1f\':\'1t\'},\'1c\':X+\'42\'}).Z(c);G 11(\'1y\',{\'1b\':{\'1O\':2,\'1f\':\'1t\'},\'1c\':X+\'1Y\'}).Z(c);9.2F();u k=$$(\'#\'+b+\'N\');9.v.N=k[0];9.v.2O=k[1];9.v.1a=$E(\'#\'+b+\'1a\');9.v.1n=$E(\'#\'+b+\'1n\');9.1Y=$E(\'#\'+b+\'1Y\');F(!1l.2R)9.1M()},2F:C(){u a=9.1L.41();9.v.25({\'1D\':a.1D,\'1e\':a.1e+a.M+1})},D:C(a,b){u c;b=(b)?b:\'3r\';3d(a){1w\'2b\':u t=9.v.1n.14(\'1e\').T();c=t;1v;1w\'1x\':u h=9.v.1n.M;h=(b==\'L\')?(h/2).T():h;c=h;1v;1w\'1g\':u l=9.v.1a.14(\'1D\').T();u t=9.v.1a.14(\'1e\').T();c={\'l\':l,\'t\':t};1v;1w\'U\':u t=9.v.U.14(\'40\').T();c=t;1v;3Z:u h=9.v.1a.M;u w=9.v.1a.10;h=(b==\'L\')?(h/2).T():h;w=(b==\'L\')?(w/2).T():w;c={w:w,h:h}};15 c}});20.3b(G 3Y);20.3b(G 3X);u 22=G 24({3W:\'1.0\',3p:C(h){u j=9;9.2t=$(h);9.16=9.2t.1p(\'3V[3U=3T]\');9.B=$(\'I-21\').2d();9.17=$(\'N-21\').2d();9.1u=9.2t.3S(\'#1J\');9.38=G 11(\'1Z\',{\'1N\':\'I-1F\',\'Q\':\'38\'}).Z(9.B).2s(\'37\');u i=1;B.18(C(a,b){G 11(\'1Z\',{\'1N\':\'I-1F\',\'Q\':\'1F\'+i}).Z(9.B).2s(b);i++},9);17.18(C(a){G 11(\'1Z\',{\'Q\':a}).Z(9.17).2s(a)},9);9.17.1E(\'2r\',C(){u a=9.Q,1N=j.B[j.B.13].1o();u b=B.R(1N);b[0]=a;B.1B(1N,b)});B.1B(\'37\',[\'\',\'\',\'\',\'\',\'\',\'\',\'\']);9.B.1E(\'2r\',C(){u g=9[9.13].1o();j.17.13=17.36(B.R(g)[0]);j.16.18(C(a,i){u b=B.R(g)[i+1];a.J(\'P-I\',b).Q=b;u c=b.28(1S);u d=j.1X(c);F(d[2]<2p)a.J(\'I\',\'#27\');19 a.J(\'I\',\'#2B\');u e=j.B[0].1o();u f=B.R(e);f[0]=j.17.Q;f[i+1]=a.Q;B.1B(e,f)});j.16[0].1Q(\'2o\');j.1J(B.R(g))});9.2n=G 20(\'2n\',{\'1s\':1l.35+\'/39/\',\'2f\':C(b){u c=1q;F(j.B.13){u c=B.R(j.B[j.B.13]);j.B.13=0};j.16.18(C(a,i){F(a.3Q(\'1R\')){j.1W(a,b,i)}});j.1J(c)}}).2D();15 9.34()},34:C(){9.16.18(C(g,i){u h=9;g.33({\'2o\':C(){h.16.2m(\'1R\').32().2m(\'1R\');g.2L(\'1R\').32().2L(\'1R\');F(g.Q.3z)h.2n.2k(g.Q,\'O\')},\'2Y\':C(){F(9.Q.3A(/^#[0-3N-f]{3,6}$/i)){u d=1q;F(h.B.13){u d=B.R(h.B[h.B.13]);h.B.13=0};h.16.18(C(a,i){u b=h.B[0].1o();u c=B.R(b);c[0]=h.17.Q;c[i+1]=a.Q;B.1B(b,c)});9.1Q(\'2o\');u e={\'O\':9.Q,\'1i\':9.Q.28(1S)};u f=h.1X(e.1i);F(f[2]<2p)9.J(\'I\',\'#27\');19 9.J(\'I\',\'#2B\');h.1W(9,e);h.1J()}}})},9);15 9},1J:C(a){u b={\'1A\':9.1u.1p(\'.2Z-2h\'),\'P\':9.1u.1p(\'.2Z-2g\')};u c={\'1A\':9.1u.1p(\'.2X-2h\'),\'P\':9.1u.1p(\'.2X-2g\')};u d={\'1A\':9.1u.1p(\'.2V-2h\'),\'P\':9.1u.1p(\'.2V-2g\')};u e=9.B[0].1o();b.1A.J(\'I\',(a)?a[2]:B.R(e)[2]);b.P.J(\'P-I\',(a)?a[1]:B.R(e)[1]);c.1A.J(\'I\',(a)?a[4]:B.R(e)[4]);c.P.J(\'P-I\',(a)?a[3]:B.R(e)[3]);d.1A.J(\'I\',(a)?a[6]:B.R(e)[6]);d.P.J(\'P-I\',(a)?a[5]:B.R(e)[5]);15 9},1X:C(a){u r=a[0],g=a[1],b=a[2],H,S,V;u c=1k.3K(r,g,b);u d=1k.3J(r,g,b);u e=d-c;V=d;F(!e){H=0;S=0}19{S=e/d;2j=(((d-r)/6)+(e/2))/e;2M=(((d-g)/6)+(e/2))/e;2x=(((d-b)/6)+(e/2))/e;F(r==d)H=2x-2M;19 F(g==d)H=(1/3)+2j-2x;19 F(b==d)H=(2/3)+2M-2j;F(H<0)H+=1;F(H>1)H-=1};15[H,S,V]},1W:C(a,b,i){a.J(\'P-I\',b.O).Q=b.O;u c=9.1X(b.1i);F(c[2]<2p)a.J(\'I\',\'#27\');19 a.J(\'I\',\'#2B\');u d=9.B[0].1o();u e=B.R(d);F($3I(i))e[i+1]=b.O;B.1B(d,e)}});1l.1E(\'3H\',C(){u o=G 22(\'I-3G\');u p=1l.3F.2u(":"),23=$(\'I-21\'),3o=$(\'N-21\');u q=p.3E(1);u r=p[0].2u(\',\');B.1B(q,r);u s=23.1p(\'1Z\').2v(C(a){15(a.1o()==q)?1S:1q})[0];F(s){3o.13=17.36(r[0])||0;23.13=s.Q.3D(\'1F\',\'\').T()||0;23.1Q(\'2r\')};$(\'46-4B\').1E(\'31\',C(e){G 1H(e).30();u g=o.B[o.B.13].1o();u h=B.R(g);u k=g+\':\'+h;u l=G 4A(1l.35+\'/4z.4y\',{\'4x\':\'4w\',\'4u\':\'4t=\'+k}).4r();u m=$(2J.2E).4q(\'1c\').2u(\' \');m.18(C(a,i){F(a.3A(/^N-/))$(2J.2E).2m(a)});$(2J.2E).2L(h[0]);u n=$$(\'#4p 4o.4m a\')[0];1W.18(C(c,i){u d=c.4l(\',\');u e=$$(d.3z?d:1q);u f=i;e.18(C(a,j){F(i==1&&a==n)15;u b=((i%2)||i>5)?\'I\':\'P-I\';3d(i){1w 6:f=0;1v;1w 7:f=2;1v;1w 8:f=4;1v};a.4k(b,{4j:4i}).2K(o.16[f].Q)})});F(4s&&1l.1T){1T.4h(\'22 1G\');1T.3v(\'4g 1G => "3u 1G 3x":\',$A([o.17.2c()]).3s(o.16.2c()));1T.3v(\'4e 1G => \',\'$4d = "3u 1G 3x:\'+$A([o.17.2c()]).3s(o.16.2c())+\'";\');1T.4G(\'22 1G\')}})});',62,291,'|||||||||this|||||||||||||||||||||var|layout||||||themes|function|snippet||if|new||color|setStyle|hsb|int|height|overlay|hex|background|value|get||toInt|slider||pickerPos|prefix|100|inject|width|Element|options|selectedIndex|getStyle|return|inputs|overlays|each|else|cursor|styles|class|curSize|top|position|curPos|sets|rgb|src|Math|window|rgbToHex|arrows|getText|getElements|false|bind|imgPath|absolute|previewBox|break|case|arrSize|div|sliderPos|foreground|set|round|left|addEvent|style|Theme|Event|curW|preview|360|element|hide|name|zIndex|curH|fireEvent|selected|true|console|sliderDrag|startColor|update|hsv|chooseColor|option|MooRainbow|select|RokRainbow|colorTheme|Class|setStyles|setMooRainbow|fff|hexToRgb|hsbToRgb|rgbToHsb|arrPos|getValue|empty|visible|onChange|bg|fg|overlayDrag|deltaR|manualSet|id|removeClass|rainbow|focus|127|parseColors|change|setText|wrapper|split|filter|nowColor|deltaB|autoSet|png|img|000|overflow|show|body|rePosition|hue|display|lim|document|start|addClass|deltaG|page|overlay2|snap|onDrag|khtml|onStart|limit|Base|tertiary|drag|secondary|keyup|primary|stop|click|getParent|addEvents|attachEvents|templatePath|indexOf|Custom|custom|images|Drag|implement|sliderEvents|switch|OverlayEvents|scale|doLayout|sizingMethod|AlphaImageLoader|Microsoft|DXImageTransform|progid|gif|blank|overlayTheme|initialize|hidden|none|extend|relative|Your|info|currentColor|Name|getTop|length|test|mousedown|block|replace|shift|currentTheme|chooser|domready|defined|max|min|esc|key|9a|255|setOptions|hasClass|chk|getElement|text|type|input|version|Events|Options|default|marginTop|getCoordinates|colorBox|moor_slider|index|ie6|apply|sliderClick|moor|moor_boverlay|moor_woverlay|pickerClick|overlayBox|default_theme|PHP|box|JS|group|1000|duration|effect|join|active|modifiers|li|horiznav|getProperty|request|themeDebugger|chromastyle|data|getLeft|post|method|php|rt_ajax_styles|Ajax|colors|toggle|backupColor|onComplete|mooRainbow|groupEnd'.split('|'),0,{}))