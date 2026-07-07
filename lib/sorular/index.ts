import type { TopicQuiz } from "./types";
import acilarDogrular from "./acilar-dogrular";
import analitikGeometriTyt from "./analitik-geometri-tyt";
import ardisikSayilar from "./ardisik-sayilar";
import ardisikTurev from "./ardisik-turev";
import aritmetikDiziAyt from "./aritmetik-dizi-ayt";
import artanAzalanEkstremum from "./artan-azalan-ekstremum";
import asalCarpanlarBolenSayisi from "./asal-carpanlar-bolen-sayisi";
import belirliIntegralTeoremi from "./belirli-integral-teoremi";
import bileskeTersFonksiyonAyt from "./bileske-ters-fonksiyon-ayt";
import birimCemberAyt from "./birim-cember-ayt";
import birinciDereceDenklemTyt from "./birinci-derece-denklem-tyt";
import bolmeBolunebilme from "./bolme-bolunebilme";
import carpanlaraAyirmaTyt from "./carpanlara-ayirma-tyt";
import cemberAnalitikAyt from "./cember-analitik-ayt";
import cemberDaireTyt from "./cember-daire-tyt";
import dikUcgenPisagor from "./dik-ucgen-pisagor";
import diziKavramiAyt from "./dizi-kavrami-ayt";
import dogruAnalitikAyt from "./dogru-analitik-ayt";
import dortgenlerTyt from "./dortgenler-tyt";
import ebobEkok from "./ebob-ekok";
import fonksiyonCesitleriAyt from "./fonksiyon-cesitleri-ayt";
import fonksiyonGrafikTyt from "./fonksiyon-grafik-tyt";
import fonksiyonKavramiTyt from "./fonksiyon-kavrami-tyt";
import geometrikDiziAyt from "./geometrik-dizi-ayt";
import hareketProblemleri from "./hareket-problemleri";
import ikinciDereceDenklemAyt from "./ikinci-derece-denklem-ayt";
import ikinciDereceEsitsizlikAyt from "./ikinci-derece-esitsizlik-ayt";
import ikinciTurevKonkavlik from "./ikinci-turev-konkavlik";
import integralDegiskenDegistirme from "./integral-degisken-degistirme";
import integralKavrami from "./integral-kavrami";
import integraldeAlan from "./integralde-alan";
import karisimProblemleri from "./karisim-problemleri";
import katiCisimlerTyt from "./kati-cisimler-tyt";
import kokluIfadeler from "./koklu-ifadeler";
import kumelerTyt from "./kumeler-tyt";
import limitHesaplama from "./limit-hesaplama";
import limitKavrami from "./limit-kavrami";
import logaritmaKavramiAyt from "./logaritma-kavrami-ayt";
import logaritmikDenklemAyt from "./logaritmik-denklem-ayt";
import mantikTyt from "./mantik-tyt";
import mutlakDegerTyt from "./mutlak-deger-tyt";
import olasilikTyt from "./olasilik-tyt";
import optimizasyon from "./optimizasyon";
import oranOrantiTyt from "./oran-oranti-tyt";
import ozelFonksiyonTurevleri from "./ozel-fonksiyon-turevleri";
import ozelFonksiyonlarAyt from "./ozel-fonksiyonlar-ayt";
import parabolAyt from "./parabol-ayt";
import paydayiRasyonelYapma from "./paydayi-rasyonel-yapma";
import permutasyonKombinasyonTyt from "./permutasyon-kombinasyon-tyt";
import polinomKavramiAyt from "./polinom-kavrami-ayt";
import polinomlardaBolmeAyt from "./polinomlarda-bolme-ayt";
import rasyonelSayilar from "./rasyonel-sayilar";
import sayiBasamaklari from "./sayi-basamaklari";
import sayiProblemleri from "./sayi-problemleri";
import sonsuzdaLimitAsimptot from "./sonsuzda-limit-asimptot";
import sureklilik from "./sureklilik";
import tegetNormal from "./teget-normal";
import tekCiftSayilar from "./tek-cift-sayilar";
import temelKavramlar from "./temel-kavramlar";
import trigonometrikDenklemlerAyt from "./trigonometrik-denklemler-ayt";
import trigonometrikFonksiyonlarAyt from "./trigonometrik-fonksiyonlar-ayt";
import trigonometrikOzdesliklerAyt from "./trigonometrik-ozdeslikler-ayt";
import turevAlmaKurallari from "./turev-alma-kurallari";
import turevFormulOzeti from "./turev-formul-ozeti";
import turevinTanimi from "./turevin-tanimi";
import ucgendeBenzerlikAlan from "./ucgende-benzerlik-alan";
import ucgendeTrigonometriAyt from "./ucgende-trigonometri-ayt";
import ucgenlerTyt from "./ucgenler-tyt";
import usluDenklemler from "./uslu-denklemler";
import usluIfadeler from "./uslu-ifadeler";
import ustelFonksiyonAyt from "./ustel-fonksiyon-ayt";
import veriIstatistikTyt from "./veri-istatistik-tyt";
import yasIsciProblemleri from "./yas-isci-problemleri";
import yuzdeKarZarar from "./yuzde-kar-zarar";

const BANKS: Record<string, TopicQuiz> = {
  [acilarDogrular.slug]: acilarDogrular,
  [analitikGeometriTyt.slug]: analitikGeometriTyt,
  [ardisikSayilar.slug]: ardisikSayilar,
  [ardisikTurev.slug]: ardisikTurev,
  [aritmetikDiziAyt.slug]: aritmetikDiziAyt,
  [artanAzalanEkstremum.slug]: artanAzalanEkstremum,
  [asalCarpanlarBolenSayisi.slug]: asalCarpanlarBolenSayisi,
  [belirliIntegralTeoremi.slug]: belirliIntegralTeoremi,
  [bileskeTersFonksiyonAyt.slug]: bileskeTersFonksiyonAyt,
  [birimCemberAyt.slug]: birimCemberAyt,
  [birinciDereceDenklemTyt.slug]: birinciDereceDenklemTyt,
  [bolmeBolunebilme.slug]: bolmeBolunebilme,
  [carpanlaraAyirmaTyt.slug]: carpanlaraAyirmaTyt,
  [cemberAnalitikAyt.slug]: cemberAnalitikAyt,
  [cemberDaireTyt.slug]: cemberDaireTyt,
  [dikUcgenPisagor.slug]: dikUcgenPisagor,
  [diziKavramiAyt.slug]: diziKavramiAyt,
  [dogruAnalitikAyt.slug]: dogruAnalitikAyt,
  [dortgenlerTyt.slug]: dortgenlerTyt,
  [ebobEkok.slug]: ebobEkok,
  [fonksiyonCesitleriAyt.slug]: fonksiyonCesitleriAyt,
  [fonksiyonGrafikTyt.slug]: fonksiyonGrafikTyt,
  [fonksiyonKavramiTyt.slug]: fonksiyonKavramiTyt,
  [geometrikDiziAyt.slug]: geometrikDiziAyt,
  [hareketProblemleri.slug]: hareketProblemleri,
  [ikinciDereceDenklemAyt.slug]: ikinciDereceDenklemAyt,
  [ikinciDereceEsitsizlikAyt.slug]: ikinciDereceEsitsizlikAyt,
  [ikinciTurevKonkavlik.slug]: ikinciTurevKonkavlik,
  [integralDegiskenDegistirme.slug]: integralDegiskenDegistirme,
  [integralKavrami.slug]: integralKavrami,
  [integraldeAlan.slug]: integraldeAlan,
  [karisimProblemleri.slug]: karisimProblemleri,
  [katiCisimlerTyt.slug]: katiCisimlerTyt,
  [kokluIfadeler.slug]: kokluIfadeler,
  [kumelerTyt.slug]: kumelerTyt,
  [limitHesaplama.slug]: limitHesaplama,
  [limitKavrami.slug]: limitKavrami,
  [logaritmaKavramiAyt.slug]: logaritmaKavramiAyt,
  [logaritmikDenklemAyt.slug]: logaritmikDenklemAyt,
  [mantikTyt.slug]: mantikTyt,
  [mutlakDegerTyt.slug]: mutlakDegerTyt,
  [olasilikTyt.slug]: olasilikTyt,
  [optimizasyon.slug]: optimizasyon,
  [oranOrantiTyt.slug]: oranOrantiTyt,
  [ozelFonksiyonTurevleri.slug]: ozelFonksiyonTurevleri,
  [ozelFonksiyonlarAyt.slug]: ozelFonksiyonlarAyt,
  [parabolAyt.slug]: parabolAyt,
  [paydayiRasyonelYapma.slug]: paydayiRasyonelYapma,
  [permutasyonKombinasyonTyt.slug]: permutasyonKombinasyonTyt,
  [polinomKavramiAyt.slug]: polinomKavramiAyt,
  [polinomlardaBolmeAyt.slug]: polinomlardaBolmeAyt,
  [rasyonelSayilar.slug]: rasyonelSayilar,
  [sayiBasamaklari.slug]: sayiBasamaklari,
  [sayiProblemleri.slug]: sayiProblemleri,
  [sonsuzdaLimitAsimptot.slug]: sonsuzdaLimitAsimptot,
  [sureklilik.slug]: sureklilik,
  [tegetNormal.slug]: tegetNormal,
  [tekCiftSayilar.slug]: tekCiftSayilar,
  [temelKavramlar.slug]: temelKavramlar,
  [trigonometrikDenklemlerAyt.slug]: trigonometrikDenklemlerAyt,
  [trigonometrikFonksiyonlarAyt.slug]: trigonometrikFonksiyonlarAyt,
  [trigonometrikOzdesliklerAyt.slug]: trigonometrikOzdesliklerAyt,
  [turevAlmaKurallari.slug]: turevAlmaKurallari,
  [turevFormulOzeti.slug]: turevFormulOzeti,
  [turevinTanimi.slug]: turevinTanimi,
  [ucgendeBenzerlikAlan.slug]: ucgendeBenzerlikAlan,
  [ucgendeTrigonometriAyt.slug]: ucgendeTrigonometriAyt,
  [ucgenlerTyt.slug]: ucgenlerTyt,
  [usluDenklemler.slug]: usluDenklemler,
  [usluIfadeler.slug]: usluIfadeler,
  [ustelFonksiyonAyt.slug]: ustelFonksiyonAyt,
  [veriIstatistikTyt.slug]: veriIstatistikTyt,
  [yasIsciProblemleri.slug]: yasIsciProblemleri,
  [yuzdeKarZarar.slug]: yuzdeKarZarar,
};

export function getQuiz(slug: string): TopicQuiz | undefined {
  return BANKS[slug];
}

/** Real question count for a topic, or undefined if it has no bank yet. */
export function getQuizCount(slug: string): number | undefined {
  return BANKS[slug]?.questions.length;
}

export type { TopicQuiz, QuizQuestion } from "./types";
