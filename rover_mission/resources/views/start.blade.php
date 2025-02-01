<!DOCTYPE html>
<html lang="EN">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="{{ asset('js/roverMovement.js') }} "></script>

    </head>
    <body>
        <div class="flex items-center justify-center min-h-screen bg-gray-100">
            <div class="w-[80%]">
                <form id="moveForm" class="mb-8">
                    <input type="text" class="border border-black p-2 rounded mr-4" id="indications">
                    <input type="button" value="Enviar indicaciones" id="send" class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">
                </form>
                <div class="overflow-x-auto overflow-y-auto max-h-96 max-w-full">
                    <table class="border-collapse table-auto">
                        <?php
                            for ($y = 1; $y <= 200; $y++) {
                                echo "<tr>";
                                for ($x = 1; $x <= 200; $x++) {
                                    if([$y,$x] == [1,1]){
                                        echo "<td class='min-w-[50px] h-[50px] bg-red-500 border border-white text-center font-bold text-[20px]' id='".$y.",".$x."'>";
                                        echo "<p id='rover' class=''>V</p>";
                                        echo "</td>";
                                    }else{
                                        if(rand(1,200) < 20){
                                            echo "<td class='obstacle min-w-[50px] h-[50px] bg-red-500 border border-white text-center font-bold text-[20px]' id='".$y.",".$x."'>";
                                            echo "<p>X</p>";
                                            echo "</td>";
                                        }else{
                                            echo "<td class='min-w-[50px] h-[50px] bg-red-500 border border-white text-center font-bold text-[20px]' id='".$y.",".$x."'></td>";
                                        }
                                    }
                                }
                                echo "</tr>";
                            }
                        ?>
                    </table>
                </div>
            </div>
        </div>
    </body>
</html>
