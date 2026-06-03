# TokenizerFromScratch

Ein kleines JavaScript-Lernprojekt, um die Grundlagen von Tokenizing und Parsing zu verstehen.

Das Projekt entstand aus dem Wunsch nachzuvollziehen, wie Funktionen wie JSON.parse() Daten aus einem String analysieren und in JavaScript-Objekte umwandeln.

## Funktionen

* Verarbeitung eines Eingabestrings
* Zeichenweises Auslesen des Inputs
* Erkennung von Buchstaben zwischen a-z
* Sammeln der erkannten Zeichen in einem Buffer
* Erzeugung eines Token-Objekts mit Typ und Wert

## Verwendete Technologien
* JavaScript (ES6+)
* Node.js

## Funktionsweise
 
* Es gibt einen Input in Form eines Strings, der an die Funktion tokenize() übergeben wird
* Der String wird Zeichen für Zeichen durchlaufen und auf eine Bedingung überprüft
* Ergibt die Bedingung true, wird das jeweilige Zeichen dem Buffer hinzugefügt
* Der Buffer sammelt dadurch alle Zeichen, die die Bedingung erfüllen
* Ergibt die Bedingung false, wird das Zeichen ignoriert und nicht dem Buffer hinzugefügt
* Nach dem Durchlaufen der Schleife wird ein Objekt erstellt
* Dieses Objekt enthält den Typ des Tokens sowie den Inhalt des Buffers als Wert
* * Das Objekt wird mittels return zurückgegeben und kann anschließend beispielsweise in der Variablen token1 gespeichert werden

## Verwendete Konzepte

* Funktion mit Parameter und Rückgabewert 
* Schleife mit Iteration via Index
* Vergleichsoperatoren
* Bedingung 
* Objekt erstellen
* Buffering

## Projektstruktur

TokenizerFromScratch/main.js

## Lernziele

* Ich wollte verstehen, wie Daten umgewandelt werden, nachdem ich mich mit Local Storage beschäftigt habe
* Dabei bin ich auf JSON.parse() gestoßen, das einen JSON-String in ein JavaScript-Objekt umwandelt
* Aus Neugier wollte ich verstehen, wie dieser Prozess intern funktioniert
* Das führte mich zu den Themen Tokenizing und Parsing und schließlich zu dem Ziel, einen einfachen eigenen Tokenizer und Parser zu entwickeln


## Code ausführen

* Vorausetzung ist, dass node.js installiert ist
* https://nodejs.org/en/download
* Terminal öffnen und in den Projektordner wechseln
* node main.js im Terminal ausführen

 * erwartete Ausgabe : { type: 'IDENTIFIER', value: 'alter' }
