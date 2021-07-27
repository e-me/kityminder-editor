define(function(require, exports, module) {
    return module.exports = {
        'template': {
            'default': 'Mind map',
            'tianpan': 'Sky map',
            'structure': 'Organization Chart',
            'filetree': 'Directory organization chart',
            'right': 'logical structure diagram',
            'fish-bone': 'Fish bone figure'
        },
        'theme': {
            'classic': 'Classic',
            'classic-compact': 'Compact classic',
            'snow': 'Gentle cold light',
            'snow-compact': 'Compact cold light',
            'fish': 'Fish bone map',
            'wire': 'Wireframe',
            'fresh-red': 'Fresh red',
            'fresh-soil': 'Dirty yellow',
            'fresh-green': 'Artistic Green',
            'fresh-blue': 'Sky Blue',
            'fresh-purple': 'Romantic Purple',
            'fresh-pink': 'Mind powder',
            'fresh-red-compat': 'Compact red',
            'fresh-soil-compat': 'Compact yellow',
            'fresh-green-compat': 'Compact green',
            'fresh-blue-compat': 'Compact blue',
            'fresh-purple-compat': 'Compact purple',
            'fresh-pink-compat': 'Compact powder',
            'tianpan': 'Classic dial',
            'tianpan-compact': 'Compact day'
        },
        'maintopic': 'Center theme',
        'topic': 'branch topic',
        'panels': {
            'history': 'ιστορικό',
            'template': 'πρότυπο',
            'theme': 'skin',
            'layout': 'layout',
            'style': 'style',
            'font': 'κείμενο',
            'color': 'χρώμα',
            'background': 'φόντο',
            'insert': 'εισαγωγή',
            'arrange': 'adjust',
            'nodeop': 'current',
            'priority': 'προτεραιότητα',
            'progress': 'πρόοδος',
            'resource': 'resource',
            'note': 'σημείωση',
            'attachment': 'συνημμένο',
            'word': 'κείμενο'
        },
        'ui': {
            'command': {
                'appendsiblingnode': 'Insert sibling node',
                'appendparentnode': 'Insert parent node',
                'appendchildnode': 'Insert child node',
                'removenode': 'Διαγραφή',
                'editnode': 'Επεξεργασία',
                'arrangeup': 'Πάνω',
                'arrangedown': 'Κάτω',
                'resetlayout': 'Επαναφορά διάταξης',
                'expandtoleaf': 'Expand all nodes',
                'expandtolevel1': 'Expand to level 1',
                'expandtolevel2': 'Expand to level 2',
                'expandtolevel3': 'Expand to level 3',
                'expandtolevel4': 'Expand to level 4',
                'expandtolevel5': 'Expand to level 5',
                'expandtolevel6': 'Expand to level 6',
                'fullscreen': 'πλήρης οθόνη',
                'outline': 'outline'
            },
            'search': 'Αναζήτηση',
            'expandtoleaf': 'Expand',
            'back': 'πίσω',
            'undo': 'Αναίρεση (Ctrl + Z)',
            'redo': 'Επανάληψη (Ctrl + Y)',
            'tabs': {
                'idea': 'Έννοια',
                'appearence': 'Εμφάνιση',
                'view': 'Προβολή'
            },
            'bold': 'Έντονα',
            'italic': 'Πλάγια',
            'forecolor': 'Χρωμα γραμματοσειράς',
            'fontfamily': 'Γραμματοσειρά',
            'fontsize': 'Μέγεθος',
            'layoutstyle': 'Theme',
            'node': 'Node operation',
            'hand': 'Allow dragging',
            'camera': 'Εντοπισμός κόμβου-ρίζα',
            'zoom-in': 'Zoom in (Ctrl+)',
            'zoom-out': 'Zoom out (Ctrl-)',
            'markers': 'tag',
            'help': 'Βοήθεια',
            'preference': 'Προτιμήσεις',
            'expandnode': 'Expand to leaf',
            'collapsenode': 'receive a level one node',
            'template': 'πρότυπο',
            'theme': 'skin',
            'clearstyle': 'Clear style',
            'copystyle': 'Copy style',
            'pastestyle': 'Paste style',
            'appendsiblingnode': 'same theme',
            'appendchildnode': 'subordinate theme',
            'arrangeup': 'pre-tune',
            'arrangedown': 'post-tune',
            'editnode': 'Επεξεργασία',
            'removenode': 'Αφαίρεση',
            'priority': 'Προτεραιότητα',
            'progress': {
                'p1': 'not started',
                'p2': 'Ολοκληρώθηκε το 1/8',
                'p3': 'Ολοκληρώθηκε το 1/4',
                'p4': 'Ολοκληρώθηκαν τα 3/8',
                'p5': 'Ολοκληρώθηκε το 1/2',
                'p6': 'Ολοκληρώθηκαν τα 5/8',
                'p7': 'Ολοκληρώθηκαν τα 3/4',
                'p8': 'Ολοκληρώθηκαν τα 7/8',
                'p9': 'Ολοκληρώθηκε',
                'p0': 'Εκκαθάριση προόδου'
            },
            'resource': {
                'add': 'Προσθήκη'
            },
            'link': 'Σύνδεσμος',
            'image': 'Εικόνα',
            'note': 'Σημείωση',
            'insertlink': 'Εισαγωγή συνδέσμου',
            'insertimage': 'Εισαγωγή εικόνας',
            'insertnote': 'Εισαγωγή σημείωσης',
            'removelink': 'Αφαίρεση υπαρχόντων συνδέσμων',
            'removeimage': 'Αφαίρεση υπάρχουσας εικόνας',
            'removenote': 'Αφαίρεση υπαρχουσών σημειώσεων',
            'resetlayout': 'Οργάνωση',
            'navigator': 'Πλοήγηση',
            'selectall': 'Επιλογή Όλων',
            'selectrevert': 'Select revert',
            'selectsiblings': 'Select siblings',
            'selectlevel': 'Επιλογή επιπέδου',
            'selectpath': 'Επιλογή μονοπατιού',
            'selecttree': 'Select subtree',
            'noteeditor': {
                'title': 'Σημείωση΄',
                'hint': 'Υποστήριξη κανόνων GFM',
                'placeholder': 'Παρακαλούμε επιλέξτε έναν κόμβο για να τον επεξεργαστείτε'
            },
            'dialog': {
                'image': {
                    'title': 'Εικόνα',
                    'imagesearch': 'Αναζήτηση εικόνας',
                    'keyword': 'Λέξη-κλειδί：',
                    'placeholder': 'Παρακαλώ εισαγάγετε λέξεις-κλειδιά για αναζήτηση',
                    'baidu': 'Αναζήτηση',
                    'linkimage': 'Συνδεδεμένη Εικόνα',
                    'linkurl': 'URL：',
                    'placeholder2': 'Απαιτείται： η διεύθυνση να ξεκινάει με http(s)://',
                    'imagehint': 'Υπόδειξη：',
                    'placeholder3': 'Προαιρετικό: Το κείμενο που εμφανίζεται όταν περνάει το ποντίκι πάνω από την εικόνα',
                    'preview': 'Προεπισκόπηση Εικόνας：',
                    'uploadimage': 'Μεταφόρτωση Εικόνας',
                    'selectfile': 'Επιλογή αρχείου...',
                    'ok': 'OK',
                    'cancel': 'Ακύρωση',
                    'formatinfo': 'Η κατάληξη του αρχείου πρέπει να είναι jpg、gif ή png'
                },
                'hyperlink': {
                    'title': 'Σύνδεσμος',
                    'linkurl': 'URL συνδέσμου：',
                    'linkhint': 'Υπόδειξη：',
                    'placeholder': 'Απαιτείται： η διεύθυνση να ξεκινάει με http(s):// ή ftp://',
                    'placeholder2': 'Προαιρετικό: Το κείμενο που εμφανίζεται όταν περνάει το ποντίκι πάνω από τον σύνδεσμο',
                    'ok': 'OK',
                    'cancel': 'Ακύρωση'

                },
                'exportnode': {
                    'title': 'Εξαγωγή Κόμβου',
                    'ok': 'OK',
                    'cancel': 'Ακύρωση'
                }
            }
        },
        'runtime': {
            'minder': {
                'maintopic': 'Κεντρική Έννοια'
            },
            'node': {
                'arrangeup': 'Arrange Up',
                'appendchildnode': 'Append Child Node',
                'appendsiblingnode': 'Append Sibling Node',
                'arrangedown': 'Arrange Down',
                'removenode': 'Διαγραφή',
                'appendparentnode': 'Append Parent Node',
                'selectall': 'Επιλογή Όλων',
                'topic': 'Θεματική',
                'importnode': 'Εισαγωγή Κόμβου',
                'exportnode': 'Εξαγωγή Κόμβου'
            },
            'input': {
                'edit': 'Επεξεργασία'
            },
            'priority': {
                'main': 'Προτεραιότητα',
                'remove': 'Διαγραφή',
                'esc': 'Esc'
            },
            'progress': {
                'main': 'Πρόοδος',
                'remove': 'Διαγραφή',
                'esc': 'Esc'
            },
            'history': {
                'undo': 'Αναίρεση',
                'redo': 'Επανάληψη'
            }
        }
    };
});
