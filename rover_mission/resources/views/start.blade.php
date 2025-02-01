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
        <?php
            $x = request('x');
            $y = request('y');
            $direction = request('direction');
            if($direction == null){
            ?>
                <div class="flex items-center justify-center min-h-screen bg-gray-100 p-4">
                    <div class="bg-white shadow-lg rounded-2xl p-6 w-96">
                        <h2 class="text-xl font-semibold text-center mb-4">Introduce coordenadas entre 1 y 200</h2>
                        <form class="space-y-4" action = "{{ url('/') }}" method="GET">
                            @csrf
                            <div class="flex flex-col">
                                <label class="font-medium text-gray-700">Coordenada Y:</label>
                                <input type="number" class="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" name="y" required>
                            </div>
                            <div class="flex flex-col">
                                <label class="font-medium text-gray-700">Coordenada X:</label>
                                <input type="number" class="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"name="x" required>
                            </div>
                            <div class="flex flex-col">
                                <label class="font-medium text-gray-700">Dirección Inicial:</label>
                                <select class="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" name="direction" >
                                    <option value="N">N</option>
                                    <option value="S" selected>S</option>
                                    <option value="E">E</option>
                                    <option value="W">W</option>
                                </select>
                            </div>
                            <button class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">Submit</button>
                        </form>
                    </div>
                </div>
            <?php
            }else{
            ?>
                <div class="flex items-center justify-center min-h-screen bg-gray-100">
                    <div class="w-[80%]">
                        <form id="moveForm" class="mb-8">
                            <input type="text" class="border border-black p-2 rounded mr-4" id="indications">
                            <input type="button" value="Enviar indicaciones" id="send" class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">
                            <a href="{{ url('/') }}" class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">Reset</a>
                        </form>
                        <div class="overflow-x-auto overflow-y-auto max-h-96 max-w-full">
                            <table class="border-collapse table-auto">
                                <?php
                                    for ($col = 1; $col <= 200; $col++) {
                                        echo "<tr>";
                                        for ($row = 1; $row <= 200; $row++) {
                                            if([$y,$x] == [$col,$row]){
                                                echo "<td class='min-w-[50px] h-[50px] bg-red-500 border border-white text-center font-bold text-[20px]' id='".$col.",".$row."'>";
                                                echo "<p id='rover' class=''>V</p>";
                                                echo "</td>";
                                            }else{
                                                if(rand(1,200) < 20){
                                                    echo "<td class='obstacle min-w-[50px] h-[50px] bg-red-500 border border-white text-center font-bold text-[20px]' id='".$col.",".$row."'>";
                                                    echo "<p>X</p>";
                                                    echo "</td>";
                                                }else{
                                                    echo "<td class='min-w-[50px] h-[50px] bg-red-500 border border-white text-center font-bold text-[20px]' id='".$col.",".$row."'></td>";
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
            <?php
            }
        ?>
    </body>
</html>
