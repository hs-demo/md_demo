## Sample2
一般的に利用されているMarkdwon記法（GitHub Flavored With Markdown）では表現しきれない複雑な表現を実現するために、機能を拡張しています。

### セルの結合
| headerA | headerB |
| :---:   | :---:   |
| cellA   | cellB   |
| >       | cellD   |
| cellE   | cellF   |
| cellG   | ^       |

### LateX記法
$$f(t) = \displaystyle\int_{-\infty}^{\infty}g(x)(\cos(2\pi xt)+j\sin(2\pi xt))dx$$

### メモ・ヒント・注意・警告

> [!note]
> hogehoge

---

> [!tip]
> hogehoge

---

> [!warning]
> hogehoge

---

> [!danger]
> hogehoge

### PlantUMLによる製図
```puml
@startuml

title 状態遷移図の例
skinparam shadowing false

state 審査中
state 承認済
state 実施中
state 中断中
state 差し戻し中
state 終了

[*] --> 審査中 : 申請
審査中 --> 承認済 : 承認
承認済 --> 実施中 : 開始
実施中 --> 中断中 : 中断
中断中 --> 実施中 : 再開

審査中 -> 差し戻し中 : 差し戻し
差し戻し中 -> 審査中 : 再申請
差し戻し中 -down-> 終了 : 取り下げ

承認済 --> 終了 : 取り下げ
実施中 --> 終了 : 完了
中断中 --> 終了 : 中止

終了 --> [*]

@enduml
```

```puml
@startuml
title パッケージ図と依存関係

' package
package 顧客 {}
package 受注 {}
package 商品 {}
package 在庫 {}
package 出荷 {}
package 請求 {}
package 回収 {}

' link
顧客 <. 受注
商品 <. 受注
受注 ..> 在庫
商品 <. 在庫
受注 <. 出荷
在庫 <. 出荷
出荷 <. 請求
請求 <. 回収
@enduml
```

```puml
@startuml

|__顧客__|
    :注文する;

|#AntiqueWhite|__販売部門__|
    :在庫を確認する;
    :出荷を確認する;

|__出荷部門__|
    :出荷する;
    fork
    :出荷を報告する;

|#AntiqueWhite|__経理部門__|
    :請求する;

|__顧客__|
    forkagain
    :商品を受け取る;

|__顧客__|
    end fork
    :支払う;

|#AntiqueWhite|__経理部門__|
    :入金を確認する;

@enduml
```
