/**
 * Created by Julius Alvarado on 5/5/2017.
 */

(function () {
    var app = angular.module('ap-slider');
    // products group 1 data service
    app.factory("jProductGroup1Data", ['$firebaseObject', '$firebaseArray',
        function ($firebaseObject, $firebaseArray) {
            var ref_messages = firebase.database().ref().child('messages');
            var ref_row1 = firebase.database().ref().child('Row1');

            // Row1 Data
            var ref_row1_group1 = firebase.database().ref().child('Row1').child('Group1');
            var ref_row1_group2 = firebase.database().ref().child('Row1').child('Group2');
            var ref_row1_group3 = firebase.database().ref().child('Row1').child('Group3');
            var ref_row1_group4 = firebase.database().ref().child('Row1').child('Group4');

            // Row2 Data
            var ref_row2_group1 = firebase.database().ref().child('Row2').child('Group1');
            var ref_row2_group2 = firebase.database().ref().child('Row2').child('Group2');
            var ref_row2_group3 = firebase.database().ref().child('Row2').child('Group3');
            var ref_row2_group4 = firebase.database().ref().child('Row2').child('Group4');

            // Row3 Data
            var ref_row3_group1 = firebase.database().ref().child('Row3').child('Group1');
            var ref_row3_group2 = firebase.database().ref().child('Row3').child('Group2');
            var ref_row3_group3 = firebase.database().ref().child('Row3').child('Group3');
            var ref_row3_group4 = firebase.database().ref().child('Row3').child('Group4');

            // Row4 Data
            var ref_row4_group1 = firebase.database().ref().child('Row4').child('Group1');
            var ref_row4_group2 = firebase.database().ref().child('Row4').child('Group2');
            var ref_row4_group3 = firebase.database().ref().child('Row4').child('Group3');
            var ref_row4_group4 = firebase.database().ref().child('Row4').child('Group4');

            // random reference used for practice
            var ref_jcategories = firebase.database().ref().child('jcategories').orderByChild("name");

            return {
                Row1: $firebaseArray(ref_row1),
                // Row 1 data
                Row1Group1: $firebaseArray(ref_row1_group1),
                Row1Group2: $firebaseArray(ref_row1_group2),
                Row1Group3: $firebaseArray(ref_row1_group3),
                Row1Group4: $firebaseArray(ref_row1_group4),
                // Row 2 data
                Row2Group1: $firebaseArray(ref_row2_group1),
                Row2Group2: $firebaseArray(ref_row2_group2),
                Row2Group3: $firebaseArray(ref_row2_group3),
                Row2Group4: $firebaseArray(ref_row2_group4),
                // Row 3 data
                Row3Group1: $firebaseArray(ref_row3_group1),
                Row3Group2: $firebaseArray(ref_row3_group2),
                Row3Group3: $firebaseArray(ref_row3_group3),
                Row3Group4: $firebaseArray(ref_row3_group4),
                // Row 4 data
                Row4Group1: $firebaseArray(ref_row4_group1),
                Row4Group2: $firebaseArray(ref_row4_group2),
                Row4Group3: $firebaseArray(ref_row4_group3),
                Row4Group4: $firebaseArray(ref_row4_group4),
                jcategories: $firebaseArray(ref_jcategories),
                ProductsMessagesArray: function () {
                    return $firebaseArray(ref_messages);
                }
            }
        }
    ]);
})();
