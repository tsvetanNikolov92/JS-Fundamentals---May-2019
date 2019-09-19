function giftBox(input) {
    let sideSize = Number(input[0]);
    let sheetsPaperNum = Number(input[1]);
    let singleSheetCover = Number(input[2]);
    
    let boxArea = sideSize * sideSize * 6;
    let differentSheets = Math.floor(sheetsPaperNum / 3);
    let finalCoveredArea = singleSheetCover * (sheetsPaperNum - differentSheets) + (differentSheets * singleSheetCover * 0.25);

    let areaInPercent = finalCoveredArea / boxArea * 100;

    console.log(`You can cover ${areaInPercent.toFixed(2)}% of the box.`);

}

giftBox(['2.5', '32', '4.25']);