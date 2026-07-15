// ─────────────────────────────────────────────────────────────────────────────
// Soru-tipleri registry. One knowledge file per topic slug; the content engine
// reads these to generate on-pattern quiz questions and to verify them. To add
// a topic's knowledge:
//   1. create lib/soru-tipleri/<slug>.ts exporting a TopicSoruTipleri,
//   2. register it in KB below.
// ─────────────────────────────────────────────────────────────────────────────

import type { TopicSoruTipleri } from "./types";
import limitKavrami from "./limit-kavrami";
import limitHesaplama from "./limit-hesaplama";
import sonsuzdaLimitAsimptot from "./sonsuzda-limit-asimptot";
import sureklilik from "./sureklilik";
import turevinTanimi from "./turevin-tanimi";
import turevAlmaKurallari from "./turev-alma-kurallari";
import ozelFonksiyonTurevleri from "./ozel-fonksiyon-turevleri";
import ardisikTurev from "./ardisik-turev";
import tegetNormal from "./teget-normal";
import artanAzalanEkstremum from "./artan-azalan-ekstremum";
import ikinciTurevKonkavlik from "./ikinci-turev-konkavlik";
import optimizasyon from "./optimizasyon";
import birimCemberAyt from "./birim-cember-ayt";
import trigonometrikFonksiyonlarAyt from "./trigonometrik-fonksiyonlar-ayt";
import trigonometrikOzdesliklerAyt from "./trigonometrik-ozdeslikler-ayt";
import trigonometrikDenklemlerAyt from "./trigonometrik-denklemler-ayt";
import ucgendeTrigonometriAyt from "./ucgende-trigonometri-ayt";
import dogruAnalitikAyt from "./dogru-analitik-ayt";
import cemberAnalitikAyt from "./cember-analitik-ayt";
import fonksiyonCesitleriAyt from "./fonksiyon-cesitleri-ayt";
import bileskeTersFonksiyonAyt from "./bileske-ters-fonksiyon-ayt";
import ozelFonksiyonlarAyt from "./ozel-fonksiyonlar-ayt";
import polinomKavramiAyt from "./polinom-kavrami-ayt";
import polinomlardaBolmeAyt from "./polinomlarda-bolme-ayt";
import ikinciDereceDenklemAyt from "./ikinci-derece-denklem-ayt";
import ikinciDereceEsitsizlikAyt from "./ikinci-derece-esitsizlik-ayt";
import parabolAyt from "./parabol-ayt";
import oranOrantiTyt from "./oran-oranti-tyt";
import sayiProblemleri from "./sayi-problemleri";
import yasIsciProblemleri from "./yas-isci-problemleri";
import yuzdeKarZarar from "./yuzde-kar-zarar";
import karisimProblemleri from "./karisim-problemleri";
import hareketProblemleri from "./hareket-problemleri";
import acilarDogrular from "./acilar-dogrular";
import ucgenlerTyt from "./ucgenler-tyt";
import dikUcgenPisagor from "./dik-ucgen-pisagor";
import ucgendeBenzerlikAlan from "./ucgende-benzerlik-alan";
import dortgenlerTyt from "./dortgenler-tyt";
import cemberDaireTyt from "./cember-daire-tyt";
import temelKavramlar from "./temel-kavramlar";
import tekCiftSayilar from "./tek-cift-sayilar";
import ardisikSayilar from "./ardisik-sayilar";
import sayiBasamaklari from "./sayi-basamaklari";
import bolmeBolunebilme from "./bolme-bolunebilme";
import asalCarpanlarBolenSayisi from "./asal-carpanlar-bolen-sayisi";
import ebobEkok from "./ebob-ekok";
import rasyonelSayilar from "./rasyonel-sayilar";
import usluIfadeler from "./uslu-ifadeler";
import usluDenklemler from "./uslu-denklemler";
import kokluIfadeler from "./koklu-ifadeler";
import paydayiRasyonelYapma from "./paydayi-rasyonel-yapma";
import carpanlaraAyirmaTyt from "./carpanlara-ayirma-tyt";
import birinciDereceDenklemTyt from "./birinci-derece-denklem-tyt";
import mutlakDegerTyt from "./mutlak-deger-tyt";
import diziKavramiAyt from "./dizi-kavrami-ayt";
import aritmetikDiziAyt from "./aritmetik-dizi-ayt";
import geometrikDiziAyt from "./geometrik-dizi-ayt";
import ustelFonksiyonAyt from "./ustel-fonksiyon-ayt";
import logaritmaKavramiAyt from "./logaritma-kavrami-ayt";
import logaritmikDenklemAyt from "./logaritmik-denklem-ayt";
import permutasyonKombinasyonTyt from "./permutasyon-kombinasyon-tyt";
import olasilikTyt from "./olasilik-tyt";
import kumelerTyt from "./kumeler-tyt";
import mantikTyt from "./mantik-tyt";
import katiCisimlerTyt from "./kati-cisimler-tyt";
import integralKavrami from "./integral-kavrami";
import integralDegiskenDegistirme from "./integral-degisken-degistirme";
import belirliIntegralTeoremi from "./belirli-integral-teoremi";
import integraldeAlan from "./integralde-alan";

// Curriculum order (limit → türev), matching the AYT ünite flow.
const KB: Record<string, TopicSoruTipleri> = {
  [limitKavrami.slug]: limitKavrami,
  [limitHesaplama.slug]: limitHesaplama,
  [sonsuzdaLimitAsimptot.slug]: sonsuzdaLimitAsimptot,
  [sureklilik.slug]: sureklilik,
  [turevinTanimi.slug]: turevinTanimi,
  [turevAlmaKurallari.slug]: turevAlmaKurallari,
  [ozelFonksiyonTurevleri.slug]: ozelFonksiyonTurevleri,
  [ardisikTurev.slug]: ardisikTurev,
  [tegetNormal.slug]: tegetNormal,
  [artanAzalanEkstremum.slug]: artanAzalanEkstremum,
  [ikinciTurevKonkavlik.slug]: ikinciTurevKonkavlik,
  [optimizasyon.slug]: optimizasyon,
  [birimCemberAyt.slug]: birimCemberAyt,
  [trigonometrikFonksiyonlarAyt.slug]: trigonometrikFonksiyonlarAyt,
  [trigonometrikOzdesliklerAyt.slug]: trigonometrikOzdesliklerAyt,
  [trigonometrikDenklemlerAyt.slug]: trigonometrikDenklemlerAyt,
  [ucgendeTrigonometriAyt.slug]: ucgendeTrigonometriAyt,
  [dogruAnalitikAyt.slug]: dogruAnalitikAyt,
  [cemberAnalitikAyt.slug]: cemberAnalitikAyt,
  [fonksiyonCesitleriAyt.slug]: fonksiyonCesitleriAyt,
  [bileskeTersFonksiyonAyt.slug]: bileskeTersFonksiyonAyt,
  [ozelFonksiyonlarAyt.slug]: ozelFonksiyonlarAyt,
  [polinomKavramiAyt.slug]: polinomKavramiAyt,
  [polinomlardaBolmeAyt.slug]: polinomlardaBolmeAyt,
  [ikinciDereceDenklemAyt.slug]: ikinciDereceDenklemAyt,
  [ikinciDereceEsitsizlikAyt.slug]: ikinciDereceEsitsizlikAyt,
  [parabolAyt.slug]: parabolAyt,
  [oranOrantiTyt.slug]: oranOrantiTyt,
  [sayiProblemleri.slug]: sayiProblemleri,
  [yasIsciProblemleri.slug]: yasIsciProblemleri,
  [yuzdeKarZarar.slug]: yuzdeKarZarar,
  [karisimProblemleri.slug]: karisimProblemleri,
  [hareketProblemleri.slug]: hareketProblemleri,
  [acilarDogrular.slug]: acilarDogrular,
  [ucgenlerTyt.slug]: ucgenlerTyt,
  [dikUcgenPisagor.slug]: dikUcgenPisagor,
  [ucgendeBenzerlikAlan.slug]: ucgendeBenzerlikAlan,
  [dortgenlerTyt.slug]: dortgenlerTyt,
  [cemberDaireTyt.slug]: cemberDaireTyt,
  [temelKavramlar.slug]: temelKavramlar,
  [tekCiftSayilar.slug]: tekCiftSayilar,
  [ardisikSayilar.slug]: ardisikSayilar,
  [sayiBasamaklari.slug]: sayiBasamaklari,
  [bolmeBolunebilme.slug]: bolmeBolunebilme,
  [asalCarpanlarBolenSayisi.slug]: asalCarpanlarBolenSayisi,
  [ebobEkok.slug]: ebobEkok,
  [rasyonelSayilar.slug]: rasyonelSayilar,
  [usluIfadeler.slug]: usluIfadeler,
  [usluDenklemler.slug]: usluDenklemler,
  [kokluIfadeler.slug]: kokluIfadeler,
  [paydayiRasyonelYapma.slug]: paydayiRasyonelYapma,
  [carpanlaraAyirmaTyt.slug]: carpanlaraAyirmaTyt,
  [birinciDereceDenklemTyt.slug]: birinciDereceDenklemTyt,
  [mutlakDegerTyt.slug]: mutlakDegerTyt,
  [diziKavramiAyt.slug]: diziKavramiAyt,
  [aritmetikDiziAyt.slug]: aritmetikDiziAyt,
  [geometrikDiziAyt.slug]: geometrikDiziAyt,
  [ustelFonksiyonAyt.slug]: ustelFonksiyonAyt,
  [logaritmaKavramiAyt.slug]: logaritmaKavramiAyt,
  [logaritmikDenklemAyt.slug]: logaritmikDenklemAyt,
  [integralKavrami.slug]: integralKavrami,
  [integralDegiskenDegistirme.slug]: integralDegiskenDegistirme,
  [belirliIntegralTeoremi.slug]: belirliIntegralTeoremi,
  [integraldeAlan.slug]: integraldeAlan,
  // Sayma, olasılık, kümeler, mantık, katı cisimler — 2026-07-15. Bu beş konu
  // "tyt" etiketli ama gerçek AYT kâğıtlarında da ~5,9 soru/yıl çıkıyor (280
  // sorunun kataloğundan ölçüldü) ve KB'de hiç karşılığı yoktu. Arketipler
  // ders kitabından değil, 48 gerçek ÖSYM sorusundan çıkarıldı.
  [permutasyonKombinasyonTyt.slug]: permutasyonKombinasyonTyt,
  [olasilikTyt.slug]: olasilikTyt,
  [kumelerTyt.slug]: kumelerTyt,
  [mantikTyt.slug]: mantikTyt,
  [katiCisimlerTyt.slug]: katiCisimlerTyt,
};

export function getSoruTipleri(slug: string): TopicSoruTipleri | undefined {
  return KB[slug];
}

/** Slugs that have a knowledge base yet (for coverage reporting). */
export function coveredTopics(): string[] {
  return Object.keys(KB);
}

export type { TopicSoruTipleri, SoruTipi, Celdirici } from "./types";
