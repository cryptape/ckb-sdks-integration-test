const {ethers} = require("hardhat");
const {expect} = require("chai");

//log0
//log1
//log2
//log3
//log4
describe("LogContract", function () {
    this.timeout(100000)

    describe("log0", function () {
        let contract;
        before(async function () {
            const blockInfoContract = await ethers.getContractFactory("LogContract");
            contract = await blockInfoContract.deploy();
            await contract.deployed();
            console.log("contractAddress:", contract.address);
        });
        it("int uint", async () => {
            let tx = await contract.log0Int();
            let receipt = await tx.wait();
            expectdArrays = [
                "-128",
                "127",
                "0",
                "255",
                "-128",
                "127",
                "0",
                "255",
                "-32768",
                "32767",
                "0",
                "65535",
                "-8388608",
                "8388607",
                "0",
                "16777215",
                "-2147483648",
                "2147483647",
                "0",
                "4294967295",
                "-549755813888",
                "549755813887",
                "0",
                "1099511627775",
                "-140737488355328",
                "140737488355327",
                "0",
                "281474976710655",
                "-36028797018963968",
                "36028797018963967",
                "0",
                "72057594037927935",
                "-9223372036854775808",
                "9223372036854775807",
                "0",
                "18446744073709551615",
                "-2361183241434822606848",
                "2361183241434822606847",
                "0",
                "4722366482869645213695",
                "-604462909807314587353088",
                "604462909807314587353087",
                "0",
                "1208925819614629174706175",
                "-154742504910672534362390528",
                "154742504910672534362390527",
                "0",
                "309485009821345068724781055",
                "-39614081257132168796771975168",
                "39614081257132168796771975167",
                "0",
                "79228162514264337593543950335",
                "-10141204801825835211973625643008",
                "10141204801825835211973625643007",
                "0",
                "20282409603651670423947251286015",
                "-2596148429267413814265248164610048",
                "2596148429267413814265248164610047",
                "0",
                "5192296858534827628530496329220095",
                "-664613997892457936451903530140172288",
                "664613997892457936451903530140172287",
                "0",
                "1329227995784915872903807060280344575",
                "-170141183460469231731687303715884105728",
                "170141183460469231731687303715884105727",
                "0",
                "340282366920938463463374607431768211455",
                "-43556142965880123323311949751266331066368",
                "43556142965880123323311949751266331066367",
                "0",
                "87112285931760246646623899502532662132735",
                "-11150372599265311570767859136324180752990208",
                "11150372599265311570767859136324180752990207",
                "0",
                "22300745198530623141535718272648361505980415",
                "-2854495385411919762116571938898990272765493248",
                "2854495385411919762116571938898990272765493247",
                "0",
                "5708990770823839524233143877797980545530986495",
                "-730750818665451459101842416358141509827966271488",
                "730750818665451459101842416358141509827966271487",
                "0",
                "1461501637330902918203684832716283019655932542975",
                "-187072209578355573530071658587684226515959365500928",
                "187072209578355573530071658587684226515959365500927",
                "0",
                "374144419156711147060143317175368453031918731001855",
                "-47890485652059026823698344598447161988085597568237568",
                "47890485652059026823698344598447161988085597568237567",
                "0",
                "95780971304118053647396689196894323976171195136475135",
                "-12259964326927110866866776217202473468949912977468817408",
                "12259964326927110866866776217202473468949912977468817407",
                "0",
                "24519928653854221733733552434404946937899825954937634815",
                "-3138550867693340381917894711603833208051177722232017256448",
                "3138550867693340381917894711603833208051177722232017256447",
                "0",
                "6277101735386680763835789423207666416102355444464034512895",
                "-803469022129495137770981046170581301261101496891396417650688",
                "803469022129495137770981046170581301261101496891396417650687",
                "0",
                "1606938044258990275541962092341162602522202993782792835301375",
                "-205688069665150755269371147819668813122841983204197482918576128",
                "205688069665150755269371147819668813122841983204197482918576127",
                "0",
                "411376139330301510538742295639337626245683966408394965837152255",
                "-52656145834278593348959013841835216159447547700274555627155488768",
                "52656145834278593348959013841835216159447547700274555627155488767",
                "0",
                "105312291668557186697918027683670432318895095400549111254310977535",
                "-13479973333575319897333507543509815336818572211270286240551805124608",
                "13479973333575319897333507543509815336818572211270286240551805124607",
                "0",
                "26959946667150639794667015087019630673637144422540572481103610249215",
                "-3450873173395281893717377931138512726225554486085193277581262111899648",
                "3450873173395281893717377931138512726225554486085193277581262111899647",
                "0",
                "6901746346790563787434755862277025452451108972170386555162524223799295",
                "-883423532389192164791648750371459257913741948437809479060803100646309888",
                "883423532389192164791648750371459257913741948437809479060803100646309887",
                "0",
                "1766847064778384329583297500742918515827483896875618958121606201292619775",
                "-226156424291633194186662080095093570025917938800079226639565593765455331328",
                "226156424291633194186662080095093570025917938800079226639565593765455331327",
                "0",
                "452312848583266388373324160190187140051835877600158453279131187530910662655",
                "-57896044618658097711785492504343953926634992332820282019728792003956564819968",
                "57896044618658097711785492504343953926634992332820282019728792003956564819967",
                "0",
                "115792089237316195423570985008687907853269984665640564039457584007913129639935",
            ]
            for (let i = 0; i < receipt.events.length; i++) {
                expect(receipt.events[i].args[0].toString()).to.be.equal(expectdArrays[i])
            }
        })
        it("bytes", async () => {
            console.log("-----")
            await testLogBytes(contract, "");
            await testLogBytes(contract, "a");
            await testLogBytes(contract, "heheheh");
            await testLogBytes(contract, "sadasdada123123213918231892h1893h12983h182h391h9ccc1213131231231232131c");
        })
    })

    describe("log0-4", function () {
        let contract;
        let receipt;
        before(async function () {
            const contractInfo = await ethers.getContractFactory("opcode_assembly_log");
            contract = await contractInfo.deploy();
            await contract.deployed();
            let tx = await contract.log1234();
            receipt = await tx.wait();
        });

        it("log0", async () => {
            console.log("--")
            expect(receipt.events[0].data).to.be.equal("0x50cb9fe53daa9737b786ab3646f04d0150dc50ef4e75f59509d83667ad5adb20");

        })
        it("log1", async () => {
            expect(receipt.events[1].data).to.be.equal("0x50cb9fe53daa9737b786ab3646f04d0150dc50ef4e75f59509d83667ad5adb20");
            expect(receipt.events[1].topics[0]).to.be.equal("0x50cb9fe53daa9737b786ab3646f04d0150dc50ef4e75f59509d83667ad5adb20");

        })
        it("log2", async () => {
            expect(receipt.events[2].data).to.be.equal("0x50cb9fe53daa9737b786ab3646f04d0150dc50ef4e75f59509d83667ad5adb20");
            expect(receipt.events[2].topics[0]).to.be.equal("0x50cb9fe53daa9737b786ab3646f04d0150dc50ef4e75f59509d83667ad5adb20");
            expect(receipt.events[2].topics[1]).to.be.contains(contract.signer.address.substring(2).toLowerCase());

        })
        it("log3", async () => {
            expect(receipt.events[3].topics[0]).to.be.equal("0x50cb9fe53daa9737b786ab3646f04d0150dc50ef4e75f59509d83667ad5adb20");
            expect(receipt.events[3].topics[1]).to.be.contains(contract.signer.address.substring(2).toLowerCase());
            expect(receipt.events[3].topics[2]).to.be.equal("0x0000000000000000000000000000000000000000000000000000000000420042");
            expect(receipt.events[3].data).to.be.equal("0x50cb9fe53daa9737b786ab3646f04d0150dc50ef4e75f59509d83667ad5adb20");

        })
        it("log4", async () => {
            expect(receipt.events[4].data).to.be.equal("0x50cb9fe53daa9737b786ab3646f04d0150dc50ef4e75f59509d83667ad5adb20");
            expect(receipt.events[4].topics[0]).to.be.equal("0x50cb9fe53daa9737b786ab3646f04d0150dc50ef4e75f59509d83667ad5adb20");
            expect(receipt.events[4].topics[1]).to.be.contains(contract.signer.address.substring(2).toLowerCase());
            expect(receipt.events[4].topics[2]).to.be.equal("0x0000000000000000000000000000000000000000000000000000000000420042");
            expect(receipt.events[4].topics[3]).to.be.equal("0x0000000000000000000000000000000000000000000000000000000000420042");
            expect(receipt.events[4].data).to.be.equal("0x50cb9fe53daa9737b786ab3646f04d0150dc50ef4e75f59509d83667ad5adb20");

        })

    })


    async function testLogBytes(contract, strData) {
        let tx = await contract.log0Byte(strData);
        let receipt = await tx.wait();
        for (let i = 0; i < receipt.events.length - 1; i++) {
            expect(hex2a(receipt.events[i].args[0].toString().substring(2,)),).to.be.contains(strData.substring(0, i + 1))
        }
        expect(hex2a(receipt.events[receipt.events.length - 1].args[0].toString().substring(2,)),).to.be.contains(strData)
    }

    function hex2a(hexx) {
        var hex = hexx.toString();//force conversion
        var str = '';
        for (var i = 0; i < hex.length; i += 2)
            str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
        return str;
    }
})